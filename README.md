# k6-with-npm


Exemplo de framework para suportar múltiplos projetos ou microsserviços.


## Instruções


### 0. Preparar ambiente e dependências

Rodar o seguinte comando

```npm ci```

### 1. Build

Rodar o seguinte comando

```npm run-script webpack``


### 2. Run

Rodar o seguinte comando

```k6 run --vus 1 --duration 1s build/app.bundle.js```

Para 1 vus (usuário virtual) em 1 segundo.


ou


```k6 run build/app.bundle.js```

caso as especificações de configurações estejam no arquivo de teste.

Exemplo (no main.js):

```javascript

export let options = {
  thresholds: {
    http_req_duration: ["p(95)<700"]
  },
  stages: [
    { duration: '10s', target: 50 },
    { duration: '20s', target: 400 },
    { duration: '30s', target: 50 },
    { duration: '30s', target: 0 },
    { duration: '30s', target: 400 }
  ],
};

```


Edite o webpack para suportar múltiplos scripts ou uma diferente estrutura de diretórios.