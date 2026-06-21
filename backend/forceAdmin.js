import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Admin } from './models/userModel.js';

// FIX: Explicitly tell it to look for both .env and .env.local
dotenv.config({ path: './.env.local' });
dotenv.config({ path: './.env' });

async function resetAdmin() {
  try {
    // Double check that the URI was found before trying to connect
    if (!process.env.MONGO_URI) {
      throw new Error("Could not find MONGO_URI in your .env or .env.local file!");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to Database");

    // Wipe all existing broken admins to prevent conflicts
    await Admin.deleteMany({});
    console.log("🗑️  Cleared old corrupted admin accounts");

    // Hardcode the ultimate test admin
    const adminEmail = "admin@test.com";
    const adminPassword = "password123";

    const newAdmin = new Admin({
      email: adminEmail,
      password: adminPassword
    });

    await newAdmin.save();

    console.log("🎉 SUCCESS! Fresh admin created:");
    console.log(`➡️  Email: ${adminEmail}`);
    console.log(`➡️  Password: ${adminPassword}`);
    console.log("You can log in at port 5174 now!");

    process.exit(0);
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

resetAdmin();