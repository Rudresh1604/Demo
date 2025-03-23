import { Box, TextareaAutosize, TextField } from "@mui/material";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";

const ContactWithUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="mt-4">
      <div className="rounded-xl border p-2">
        <div className="mt-2 max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="email3" value="Your email" />
          </div>
          <TextInput
            id="email3"
            type="email"
            placeholder="name@flowbite.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2 max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            type="text"
            placeholder="Enter your name "
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-2 max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
          />
        </div>
        <div className="mt-2 max-w-md">
          <Button className="w-full">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactWithUs;
