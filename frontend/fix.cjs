const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('./src', function(filePath) {
  if (!filePath.endsWith('.vue')) return;
  // Bỏ qua file PromotionManagement.vue vì đã sửa rồi
  if (filePath.includes('PromotionManagement.vue')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (content.includes('alert(') || content.includes('confirm(')) {
    if (!content.includes('sweetalert2')) {
      content = content.replace(/<script[^>]*>/, (match) => match + '\nimport Swal from \'sweetalert2\';');
      changed = true;
    }

    if (content.includes('confirm(')) {
      content = content.replace(/confirm\((.*?)\)/g, '(await Swal.fire({ text: $1, icon: \'warning\', showCancelButton: true, confirmButtonText: \'Đồng ý\', cancelButtonText: \'Hủy\' })).isConfirmed');
      changed = true;
    }

    if (content.includes('alert(')) {
      content = content.replace(/alert\((.*?)\)/g, 'Swal.fire($1)');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated: ' + filePath);
  }
});
