# Analisador_Lexico_JS
Desenvolvimento de um analisador léxico que reconheça expressões aritméticas, comandos de atribuição, comandos de desvio e comandos de repetição;


O Analisador Léxico deve reconhecer os seguintes padrões:

Delimitadores: '(', ')', '.', '\n', '\t', '\r', ' '; desconsiderando brancos e sinais de tabulação;

Números: [0-9];

Letras maiúsculas: [A-Z];

Letras minúsculas: [a-z];

Identificadores: palavras formadas por Letras maiúsculas e minúsculas;

Operadores aritméticos binários: '+', '-', '*', '/', cada operador precisa de um identificador único, por exemplo, um token OP_ADD para o '+';

Operadores relacionais binários: '>', '>=', '<', '<=', '<>', '==', cada operador precisa de um identificador único, por exemplo, um token OP_EQ para o '==';

Comando de atribuição: '=';

Comando de desvio: 'if', ‘else’;

Comando de repetição : 'while';

A entrada pode ser via dispositivo ou por arquivos. Poderá ter, ou não, uma interface de entrada e manipulação.

O Analisador Léxico deverá reconhecer expressões aritméticas, comandos de atribuição, desvio e repetição como exemplificado a seguir:

a = b
a = 3+4*5+9-98
total = soma + 43.10 * (12 - 78.43) / -45
if (a > b) { total = a*b } else {a=6}
while (a < v+4) { total=soma+1}

O resultado da análise pode ser uma lista de lexemas+tokens, por exemplo:

Entrada EXEMPLO 1: “a = 34 / (3.4 + 5)”
Saída:

'a' → ID
'=' → CMD_ATR
'34' → NUM
'/' → OP_DIV
'(' → DELIM
'3.4' → NUM
'+' → OP_ADD
'5' → NUM
')' → DELIM

Entrada EXEMPLO 2: “if (a > b) { soma = 10}”

Saída:

'if' → CMD_IF
'(' → DELIM
'a' → ID
'>' → OP_GT
'b' → ID
')' → DELIM
'{' → DELIM
'soma' → ID
'=' → CMD_ATR
'10' → NUM
'}' → DELIM


OBSERVAÇÕES:

podem usar qualquer linguagem de programação, desde que eu possa compilar e executar, caso não seja possível fazer uma apresentação presencial;

Tentem deixar separada a função (método ou classe) que classifica os lexemas em tokens (Léxico) da função que requisita a análise (Main, por exemplo). Isto será útil na separação posterior entre Léxico e Sintático.

Para inspiração, acessem os exemplos de código disponíveis na AULA 03, em: Analisador Léxico - Códigos Exemplos
