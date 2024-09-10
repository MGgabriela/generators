import qrCode from 'qrcode-terminal';

async function handler(error, result) {
    if (error) {
        console.log("Error on app");
        return;
    }

    const isSmall = result.type == 2;
    qrCode.generate(result.link, { small: isSmall }, (qrcode) => { 
        console.log("\n QR CODE gerado com sucesso! ");
        console.log(qrcode);
    });
}

export default handler;