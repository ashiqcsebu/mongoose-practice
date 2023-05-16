import User from "./user.model";

export const createUserToDB = async () => {
    const user =await new User({
        id: '3',
        role: "student",
        password: 'NEXT',
        name: {
            firstName: 'Ashiqul',
            middleName: 'Islam',
            lastName: 'Shabu',
        },
        gender: "male",
        email: 'abc@gmail.com',
        contactNumber: '7856576467',
        emergencyContact: '98678956785',
        presentAddress: 'dhaka',
        permanentAddress: 'barisal'
    });
    await user.save()
    return user;
};

export const getUsersFromDB =async ()=>{
    const users = await User.find()
    return users;
}
