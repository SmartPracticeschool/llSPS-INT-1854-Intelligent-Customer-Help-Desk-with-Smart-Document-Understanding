function main(params) {
  if (params.name) {
    return { greeting: `Hello ${params.name}` };
  }
  return { greeting: 'Hello aman!' };
}

exports.main = main;
