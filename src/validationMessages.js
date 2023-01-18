module.exports = function (method, arg, inverted, language) {
  const msgList = inverted ? language === 'pt-Br' ? negativeMessagesBr : negativeMessages : language === 'pt-Br' ? positiveMessagesBr : positiveMessages;
  return msgList[method] && msgList[method](arg);
};


const positiveMessagesBr = {
  min: (num) => `A senha deve ter o tamanho minimo de ${num} caractere${pluralify(num)}`,
  max: (num) => `A senha deve ter o tamanho máximo de ${num} caractere${pluralify(num)}`,
  letters: (num = 1) => `A senha deve ter no minimo ${num} letra${pluralify(num)}`,
  digits: (num = 1) => `A senha deve ter no minimo ${num} digito${pluralify(num)}`,
  uppercase: (num = 1) => `A senha deve ter no minimo ${num} letra${pluralify(num)} maiuscula`,
  lowercase: (num = 1) => `A senha deve ter no minimo ${num} letra${pluralify(num)} minuscula`,
  symbols: (num = 1) => `A senha deve ter no minimo ${num} símbolo${pluralify(num)}`,
  spaces: (num = 1) => `A senha deve ter no minimo ${num} espaço${pluralify(num)}`,
  oneOf: (list) => `A senha deve ser ${list.length > 1 ? `um de ${list.slice(0, -1).join(', ')} e ` : ''}${list[list.length - 1]}`,
  has: (pattern) => `A senha deve ter o padrão '${pattern}'`,
  not: (pattern) => `A senha não deve ter o padrão '${pattern}'`,
  usingPlugin: (fn) => `A senha não pode violar o ${fn.name || 'plugin'}`,
};

const negativeMessagesBr = {
  min: (num) => `A senha deve ter o tamanho máximo de ${num} caractere${pluralify(num)}`,
  max: (num) => `A senha deve ter o tamanho minimo de ${num} caractere${pluralify(num)}`,
  letters: (num = 0) => `A senha ${num === 0 ? 'não tem' : `ter um máximo de ${num}`} letra${pluralify(num)}`,
  digits: (num = 0) => `A senha ${num === 0 ? 'não tem' : `ter um máximo de ${num}`} digito${pluralify(num)}`,
  uppercase: (num = 0) => `A senha ${num === 0 ? 'não tem' : `ter um máximo de ${num}`} letra${pluralify(num)} maiuscula`,
  lowercase: (num = 0) => `A senha ${num === 0 ? 'não tem' : `ter um máximo de ${num}`} letra${pluralify(num)} minuscula`,
  symbols: (num = 0) => `A senha ${num === 0 ? 'não tem' : `ter um máximo de ${num}`} símbolo${pluralify(num)}`,
  spaces: (num = 0) => `A senha ${num === 0 ? 'não tem' : `ter um máximo de ${num}`} espaço${pluralify(num)}`,
  oneOf: (list) => `A senha não deve ser ${list.length > 1 ? `um de ${list.slice(0, -1).join(', ')} e ` : ''}${list[list.length - 1]}`,
  has: (pattern) => `A senha não deve ter o padrão '${pattern}'`,
  not: (pattern) => `A senha deve ter o padrão '${pattern}'`,
  usingPlugin: (fn) => `A senha deve violar o ${fn.name || 'plugin'}`,
};

function pluralify(num) {
  return num === 1 ? '' : 's';
}
