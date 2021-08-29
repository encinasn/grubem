/* eslint-disable consistent-return */
// redondear a dos digitos ej: 1 => 01
const roundNumber = (number) => {
  const { length } = number.toString();
  if (length <= 1) {
    return `0${number}`;
  }
  return number;
};

//
export const capitalize = (word) =>
  word ? word.charAt(0).toUpperCase() + word.slice(1) : '';

// formato moneda sin $
export const formatNumber = (value) =>
  new Intl.NumberFormat('ES-AR').format(value);

// formato moneda completo
export const formatCurrency = (value) =>
  new Intl.NumberFormat('ES-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(value);

// formato fecha y hora
export const formatDateTime = (date) => {
  const initialDate = new Date(date);

  const day = roundNumber(initialDate.getDate());
  const month = roundNumber(initialDate.getMonth() + 1);
  const year = roundNumber(initialDate.getFullYear());

  const hours = roundNumber(initialDate.getHours());
  const minutes = roundNumber(initialDate.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

// formato solo fecha
export const formatDate = (date, typeMetric) => {
  const initialDate = new Date(date);

  const day = roundNumber(initialDate.getDate());
  const month = roundNumber(initialDate.getMonth() + 1);
  const year = roundNumber(initialDate.getFullYear());

  const dataYear = {
    '01': 'Ene',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Abr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Ago',
    '09': 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dic',
  };

  const dataMonth = {
    '01': '1ra Semana',
    '02': '1ra Semana',
    '03': '1ra Semana',
    '04': '1ra Semana',
    '05': '1ra Semana',
    '06': '1ra Semana',
    '07': '1ra Semana',
    '08': '1ra Semana',
    '09': '2da Semana',
    10: '2da Semana',
    11: '2da Semana',
    12: '2da Semana',
    13: '2da Semana',
    14: '2da Semana',
    15: '2da Semana',
    16: '3ra Semana',
    17: '3ra Semana',
    18: '3ra Semana',
    19: '3ra Semana',
    20: '3ra Semana',
    21: '3ra Semana',
    22: '3ra Semana',
    23: '4ta Semana',
    24: '4ta Semana',
    25: '4ta Semana',
    26: '4ta Semana',
    27: '4ta Semana',
    28: '4ta Semana',
    29: '4ta Semana',
    30: '4ta Semana',
    31: '4ta Semana',
  };

  if (typeMetric === 'year') {
    const normalDate = month;
    return dataYear[normalDate];
  }
  if (typeMetric === 'month') {
    const normalDate = day;
    return dataMonth[normalDate];
  }
  if (typeMetric === 'week') {
    const normalDate = month;
    return `${day} ${dataYear[normalDate]}`;
  }
};
