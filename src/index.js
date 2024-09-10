import prompt from "prompt";
import mainPrompt from "./schemas/schema-main.js";
import createQrCode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(mainPrompt, async (error, choose) => {
        if (choose.select == 1) {
            await createQrCode();
        }
        if (choose.select == 2) {
            await createPassword();
        }

        if(error) console.log("Error on main: ", error);
    });
    prompt.start();
}

main();