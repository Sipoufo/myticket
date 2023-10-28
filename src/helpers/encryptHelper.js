import {AES, enc} from "crypto-js"

const SECRET_KEY = "MyT!cke][2024"

export const Encrypt = (message) => {
    return AES.encrypt(message, SECRET_KEY).toString();
}

export const Decrypt = (message) => {
    let bytes = AES.decrypt(message, SECRET_KEY);
    return bytes.toString(enc.Utf8);
}