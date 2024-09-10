import prompt from "prompt";
import qrCodeSchema from '../../schemas/schema-qrcode.js';
import handler from './handler.js';

async function createQrCode() {
    prompt.get(qrCodeSchema, handler);
    prompt.start();
}

export default createQrCode;