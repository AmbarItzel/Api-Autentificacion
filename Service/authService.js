const login = async (username, password) => {
    const URL_USER_SERVICE = "http://localhost:3001/users/username/";
    try {
        const response = await fetch(URL_USER_SERVICE + username);
        
        if (response.status === 200) {
            const user = await response.json();
            
            // Verificar si el usuario realmente existe
            if (!user) {
                return {
                    status: 404,
                    message: "Usuario No Encontrado"
                };
            }

            if (user.username === username && user.password === password) {
                return {
                    status: 200,
                    token: "token-falso-" + user._id
                };
            } else {
                return {
                    status: 403,
                    message: "Usuario No Autorizado, credenciales inválidas"
                };
            }
        } else {
            return {
                status: 404,
                message: "Usuario No Encontrado"
            };
        }

    } catch (error) {
        return {
            status: 500,
            message: error.message
        };
    }
};


const createUser = async (username, email, password) => {
    const URL_USER_SERVICE = "http://localhost:3001/users";
    try {
        const response = await fetch(URL_USER_SERVICE, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });

        if (response.status === 201) {
            return await response.json();
        } else {
            return {
                status: response.status,
                message: "Usuario creado correctamente"
            };
        }
    } catch (error) {
        return {
            status: 500,
            message: error.message
        };
    }
};


module.exports = {
    login,
    createUser
    
};