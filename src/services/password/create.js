import handler from "./handler.js";

async function createPassword() {
    const password = await handler();
    console.log(password);
}

export default createPassword;