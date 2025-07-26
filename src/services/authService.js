import User from "../models/User.js";
import bcrypt from "bcryptjs";

const login = async (data) => {
  
  // Fetch the user from the database and explicitly select the password field
  const user = await User.findOne({ email: data.email }).select("+password");

  if (!user) {
    throw { statusCode: 404, message: "User not found." };
  }

  // Ensure the password field is not undefined
  if (!user.password) {
    throw { statusCode: 400, message: "Password not found in the database." };
  }
  console.log("Stored Password Hash:", user.password);

  // Compare the input password with the stored hash
  const isPasswordMatch = bcrypt.compareSync(data.password, user.password);

  console.log("Password Match:", isPasswordMatch);

  if (!isPasswordMatch) {
    throw { statusCode: 400, message: "Incorrect email or password." };
  }

  return {
    _id: user._id,
    address: user.address,
    email: user.email,
    name: user.name,
    phone: user.phone,
    roles: user.roles,
  };
};

const register = async (data) => {
  const user = await User.findOne({ email: data.email });

  if (user) throw { statusCode: 400, message: "User already exists." };

  const hashedPassword = bcrypt.hashSync(data.password);

  const registeredUser = await User.create({
    name: data.name,
    address: data.address,
    email: data.email,
    password: hashedPassword,
    phone: data.phone,
  });

  return {
    _id: registeredUser._id,
    address: registeredUser.address,
    email: registeredUser.email,
    name: registeredUser.name,
    phone: registeredUser.phone,
    roles: registeredUser.roles,
  };
};

export default { register, login };