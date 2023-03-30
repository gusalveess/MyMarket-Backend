module.exports = {
  testEnvironment: 'node',
  // Onde o Jest procurará pelos arquivos de teste
  testMatch: [
    '<rootDir>/tests/**/*.test.js',
  ],

  // Diretórios que serão ignorados ao executar os testes
  testPathIgnorePatterns: [
    '/node_modules/',
    '/tests/setupTests.js',
  ],

  // Conjunto de transformadores de arquivos que o Jest usará para transformar o código
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // Diretórios que o Jest deve olhar para encontrar os módulos necessários para os testes
  moduleDirectories: [
    'node_modules',
    'src',
  ],

  // Configurações do coletor de cobertura de código
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/serviceWorker.js',
  ],
  coverageReporters: ['lcov', 'text'],

  // Tempo máximo em milissegundos para os testes finalizarem
  testTimeout: 30000,
};