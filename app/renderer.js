const { ipcRenderer } = require('electron');

let resul = [];

analisar = document.querySelector('.btn_submit');
limpa = document.querySelector('.btn_limpar');
mensagem = document.querySelector('.msg');
resul = document.querySelector('.resultado');

limpa.addEventListener('click', function(){
    resul.value = null;
    mensagem.value = null;
});

analisar.addEventListener('click', function(){
    resul.value = null;
    console.log(mensagem.value);
    let input = mensagem.value;
    

    const comandos = {
        if: "CMD_IF",
        else: "CMD_ELSE",
        while: "CMD_WHILE",
    };
    
    const operadoresRelacionais = {
        "<": "OP_LT",
        ">": "OP_GT",
        "<=": "OP_LT_EQ",
        ">=": "OP_GT_EQ",
        "==": "OP_EQ",
        "<>": "OP_NEQ",
        "=": "CMD_ATR",
    };
    
    function* lexer(str) {
        let cursor = 0;
        let char = str[cursor];
    
        function next() {
            cursor++;
            char = str[cursor];
        }
    
        function number() {
            let buffer = "";
            while (/^[0-9]$/.test(char)) {
                buffer += char;
                next();
            }
            if (buffer.length >= 1) {
                return {
                    type: "NUM",
                    value: buffer,
                };
            }
    
            return null;
        }
    
        function identificador() {
            let buffer = "";
            
            while (/^[a-zA-Z]$/.test(char)) {
                buffer += char;
                next();
            }
            
            const type = comandos[buffer];
            if (type) {
                return {
                    type,
                    value: buffer,
                };
            }
    
            if (buffer.length >= 1) {
                return {
                    type: "ID",
                    value: buffer,
                };
            }
    
            return null;
        }
    
        function delimitador() {
            let buffer = "";
            while (char === "(" || char === ")" || char === "." || char === "\n" || char === "\t" || char === "\r") {
                buffer += char;
    
                if (buffer.length >= 1) {
                    if (char === "(") {
                        next();
                        return {
                            type: "DELIM",
                            value: buffer,
                        };
                    } else if (char === ")") {
                        next();
                        return {
                            type: "DELIM",
                            value: buffer,
                        };
                    } else if (char === ".") {
                        next();
                        return {
                            type: "DELIM",
                            value: buffer,
                        };
                    } else if (char === "\n") {
                        next();
                        return {
                            type: "DELIM",
                            value: buffer,
                        };
                    } else if (char === "\t") {
                        next();
                        return {
                            type: "DELIM",
                            value: buffer,
                        };
                    }
                    else if (char === "\r") {
                        next();
                        return {
                            type: "DELIM",
                            value: buffer,
                        };
                    }
                }
            }
        }
    
        function operator() {
            let buffer = "";
            while (/^[+-/*]$/.test(char)) {
                buffer += char;
    
                if (buffer.length >= 1) {
                    if (char === "+") {
                        next();
                        return {
                            type: "OP_ADD",
                            value: buffer,
                        };
                    } else if (char === "-") {
                        next();
                        return {
                            type: "OP_SUB",
                            value: buffer,
                        };
                    } else if (char === "*") {
                        next();
                        return {
                            type: "OP_MUL",
                            value: buffer,
                        };
                    } else if (char === "/") {
                        next();
                        return {
                            type: "OP_DIV",
                            value: buffer,
                        };
                    }
                }
            }
            return null;
        }
    
        function operatorRel() {
            let buffer = "";
            
            while (char === "<" || char === ">" || char === "=") {
                buffer += char;
                next();
            }
            
            const op = operadoresRelacionais[buffer];
            
            if (op) {
                return {
                    type: op,
                    value: buffer,
                };
            }
            
            return null;
        }
    
        function whitespace() {
            let buffer = "";
            while (char === " ") {
                buffer += char;
                next();
            }
            if (buffer.length >= 1) {
                return {
                    type: "whitespace",
                };
            }
    
            return null;
        }
    
        function eof() {
            char = str[cursor];
            if (char === undefined) {
                return {
                    type: 'EOF',
                };
            }
    
            return null;
        }
    
        for (; ;) {
            const token = delimitador() || identificador() || operatorRel() || operator() || number() || whitespace() || eof();
    
            if (token) {
                if (token.type === "whitespace") {
                    continue;
                }
                yield token;
    
                if (token.type === 'EOF') {
                    break;
                }
    
            } else {
                throw new SyntaxError(`Unexpected character: ${char} at ${cursor + 1}`
                );
            }
        }
    }
    
    console.log("start");
    let i = 0;
    let lista = [];
    for (const token of lexer(input)) {
       
        console.log(token);
        lista[i] = Object.values(token);
        resul.value = resul.value + 'Token'+','+'Lexema'+':'+'{'+ lista[i] +'}'+ '\n';
        i++;
    }
    
    console.log(lista);
    console.log("finish");
    
});


