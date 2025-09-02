import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      // Validate incoming data
      const validatedData = insertContactSchema.parse(req.body);

      // Store contact in database
      const contact = await storage.createContact(validatedData);

      // Configure transporter for Gmail
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // your Gmail
          pass: process.env.EMAIL_PASS,  // Gmail app password (NOT login password)
        },
      });

      // 1️⃣ Send email to yourself (notification)
      await transporter.sendMail({
        from: `"Website Contact Form" <${validatedData.email}>`,
        to: process.env.EMAIL_TO, // Where you want to receive the email
        subject: "New Contact Form Submission",
        text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Phone Number: ${validatedData.phone}
Company: ${validatedData.company}
Message:
${validatedData.message}
        `,
      });

      // 2️⃣ Send auto-reply to the user
      await transporter.sendMail({
        from: `"Strong Cents Associates" <${process.env.EMAIL_USER}>`,
        to: validatedData.email,
        subject: "We've received your message",
        text: `
Hi ${validatedData.name},

Thank you for reaching out to Strong Cents Associates.

Our team has received your message and will get back to you shortly.

If your inquiry is urgent, feel free to contact us directly at +94 91 227 3445.

Best regards,
Strong Cents Associates
        `,
      });

      // Respond to client
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });

    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit contact form. Please check your input." 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  // Create and return HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
