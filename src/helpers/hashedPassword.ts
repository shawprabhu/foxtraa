import bcryptjs from "bcryptjs";

export const encryptPassword = async (password: string): Promise<string> => {
    try {
        const salt = await bcryptjs.genSalt(10);
        const encryptPassword = await bcryptjs.hash(password, salt);
        return encryptPassword;
    } catch (error) {
        console.log("failed to encrypt password",error);
        throw new Error("Failed to encrypt password");
    }
};