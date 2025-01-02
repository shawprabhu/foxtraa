import bcryptjs from "bcryptjs";

export const decryptPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    try {
        const isPasswordMatch = await bcryptjs.compare(password, hashedPassword);
        return isPasswordMatch;
    } catch (error) {
        throw new Error("Failed to decrypt password");
    }
}