const fs = require('fs');

let c = fs.readFileSync('src/views/admin/ShowtimeManagement.vue', 'utf8');

c = c.replace(
  '<input type="number" v-model="formData.giaVeGoc" class="form-input" required min="10000" step="1000">',
  '<input type="text" :value="formatCurrency(formData.giaVeGoc)" @input="e => formData.giaVeGoc = parseCurrency(e.target.value)" class="form-input" required>'
);

c = c.replace(
  'const padStr = (n) => (n < 10 ? \'0\' + n : n);',
  `const padStr = (n) => (n < 10 ? '0' + n : n);

const formatCurrency = (val) => {
  if (!val) return '';
  return val.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ".");
};

const parseCurrency = (val) => {
  if (!val) return null;
  const parsed = parseInt(val.toString().replace(/\\./g, ''));
  return isNaN(parsed) ? null : parsed;
};`
);

fs.writeFileSync('src/views/admin/ShowtimeManagement.vue', c, 'utf8');
console.log('Fixed ShowtimeManagement.vue');
