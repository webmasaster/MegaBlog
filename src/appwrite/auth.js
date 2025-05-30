import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

// import conf from '../conf/conf.js';
// import { Client, Account, ID } from "appwrite";

// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);
//     }

//     async createAccount({email, password, name}) {
//         try {
//             const userAccount = await this.account.create(ID.unique(), email, password, name);
//             if (userAccount) {
//                 // Automatically log in the user after successful account creation
//                 return await this.login({email, password});
//             } else {
//                 return userAccount;
//             }
//         } catch (error) {
//             console.error("Appwrite service :: createAccount :: error", error);
            
//             // Provide more specific error messages
//             if (error.code === 409) {
//                 throw new Error("An account with this email already exists.");
//             } else if (error.code === 400) {
//                 throw new Error("Invalid email or password format.");
//             } else {
//                 throw new Error("Failed to create account. Please try again.");
//             }
//         }
//     }

//     async login({email, password}) {
//         try {
//             const session = await this.account.createEmailPasswordSession(email, password);
//             return session;
//         } catch (error) {
//             console.error("Appwrite service :: login :: error", error);
            
//             // Provide more specific error messages
//             if (error.code === 401) {
//                 throw new Error("Invalid email or password.");
//             } else if (error.code === 429) {
//                 throw new Error("Too many login attempts. Please try again later.");
//             } else {
//                 throw new Error("Login failed. Please try again.");
//             }
//         }
//     }

//     async getCurrentUser() {
//         try {
//             const user = await this.account.get();
//             return user;
//         } catch (error) {
//             console.log("Appwrite service :: getCurrentUser :: error", error);
            
//             // Don't throw error here as this is often called to check auth status
//             // Return null to indicate no authenticated user
//             return null;
//         }
//     }

//     async logout() {
//         try {
//             await this.account.deleteSessions();
//             return true; // Return success indicator
//         } catch (error) {
//             console.error("Appwrite service :: logout :: error", error);
            
//             // Even if logout fails on server, we should clear local state
//             // This is handled in the calling component
//             throw new Error("Logout failed. Please try again.");
//         }
//     }

//     // Additional utility methods
//     async updatePassword({oldPassword, newPassword}) {
//         try {
//             return await this.account.updatePassword(newPassword, oldPassword);
//         } catch (error) {
//             console.error("Appwrite service :: updatePassword :: error", error);
            
//             if (error.code === 401) {
//                 throw new Error("Current password is incorrect.");
//             } else {
//                 throw new Error("Failed to update password. Please try again.");
//             }
//         }
//     }

//     async updateName({name}) {
//         try {
//             return await this.account.updateName(name);
//         } catch (error) {
//             console.error("Appwrite service :: updateName :: error", error);
//             throw new Error("Failed to update name. Please try again.");
//         }
//     }

//     async updateEmail({email, password}) {
//         try {
//             return await this.account.updateEmail(email, password);
//         } catch (error) {
//             console.error("Appwrite service :: updateEmail :: error", error);
            
//             if (error.code === 401) {
//                 throw new Error("Password is incorrect.");
//             } else if (error.code === 409) {
//                 throw new Error("Email is already in use.");
//             } else {
//                 throw new Error("Failed to update email. Please try again.");
//             }
//         }
//     }

//     async sendPasswordRecovery({email}) {
//         try {
//             return await this.account.createRecovery(email, `${window.location.origin}/reset-password`);
//         } catch (error) {
//             console.error("Appwrite service :: sendPasswordRecovery :: error", error);
//             throw new Error("Failed to send password recovery email. Please try again.");
//         }
//     }

//     async confirmPasswordRecovery({userId, secret, password}) {
//         try {
//             return await this.account.updateRecovery(userId, secret, password);
//         } catch (error) {
//             console.error("Appwrite service :: confirmPasswordRecovery :: error", error);
            
//             if (error.code === 401) {
//                 throw new Error("Invalid or expired recovery link.");
//             } else {
//                 throw new Error("Failed to reset password. Please try again.");
//             }
//         }
//     }

//     async sendEmailVerification() {
//         try {
//             return await this.account.createVerification(`${window.location.origin}/verify-email`);
//         } catch (error) {
//             console.error("Appwrite service :: sendEmailVerification :: error", error);
//             throw new Error("Failed to send verification email. Please try again.");
//         }
//     }

//     async confirmEmailVerification({userId, secret}) {
//         try {
//             return await this.account.updateVerification(userId, secret);
//         } catch (error) {
//             console.error("Appwrite service :: confirmEmailVerification :: error", error);
            
//             if (error.code === 401) {
//                 throw new Error("Invalid or expired verification link.");
//             } else {
//                 throw new Error("Failed to verify email. Please try again.");
//             }
//         }
//     }

//     // Check if user is authenticated (utility method)
//     async isAuthenticated() {
//         try {
//             const user = await this.getCurrentUser();
//             return !!user;
//         } catch (error) {
//             return false;
//         }
//     }
// }

// const authService = new AuthService();

// export default authService;