"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  //   const [file, setFile] = (useState < File) | (null > null);
  const [file, setFile] = useState(null);
  const [currentHeadline, setCurrentHeadline] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const headlines = [
    "Create a Trailer for Your Next Blockbuster!",
    "Create Stunning Video Highlights in Seconds",
    "Transform Your Footage into Captivating Trailers",
    "Craft Your Next Viral Video with AI",
    "Turn Hours of Content into Minutes of Magic",
  ];

  useEffect(() => {
    let index = 0;
    setCurrentHeadline(headlines[0]);

    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        index = (index + 1) % headlines.length;
        setCurrentHeadline(headlines[index]);
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload here
    console.log("File to upload:", file);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-100">
        <Link className="flex items-center justify-center" href="/">
          <VideoIcon className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-blue-600">
            Highlight Hub
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4"
            href="#"
          >
            Blog
          </Link>
          <Link
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4"
            href="#"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className={`text-3xl font-bold tracking-tighter text-blue-800 sm:text-4xl md:text-5xl min-h-[120px] flex items-center transition-opacity duration-1000 ${
                      isTransitioning ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {currentHeadline}
                  </h1>
                  <p className="max-w-[600px] text-blue-600 md:text-xl">
                    Upload your video, choose categories, and get a perfectly
                    crafted trailer or highlight reel instantly.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm space-y-2">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      {/* <Label htmlFor="video-upload" className="text-blue-600">
                        Upload your video
                      </Label> */}
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="video-upload"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <UploadIcon className="w-10 h-10 mb-3 text-blue-500" />
                            <p className="mb-2 text-sm text-blue-500">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-blue-500">
                              MP4, AVI, MOV (MAX. 800MB)
                            </p>
                          </div>
                          <Input
                            id="video-upload"
                            type="file"
                            className="hidden"
                            accept="video/*"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                    >
                      Create Highlight
                    </Button>
                  </form>
                  {file && (
                    <p className="text-sm text-blue-600">
                      Selected file: {file.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-800 md:text-4xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-blue-600 md:text-xl">
                  Create captivating highlights in three easy steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center">
                  <UploadIcon className="h-20 w-20 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">
                  1. Upload Video
                </h3>
                <p className="text-sm text-blue-600">
                  Upload your full-length video from your device
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center">
                  <ListIcon className="h-20 w-20 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">
                  2. Select Categories
                </h3>
                <p className="text-sm text-blue-600">
                  Choose highlight categories or themes
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center">
                  <VideoIcon className="h-20 w-20 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">
                  3. Get Your Highlight
                </h3>
                <p className="text-sm text-blue-600">
                  Download your perfectly crafted highlight reel
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-800 md:text-4xl">
                  Features
                </h2>
                <p className="max-w-[900px] text-blue-600 md:text-xl">
                  Why choose Highlight Hub for your video highlights
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <CloudIcon className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-800">Cloud-Based</h3>
                <p className="text-sm text-blue-600">
                  Create highlights without downloading software
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <ZapIcon className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-800">
                  Fast Processing
                </h3>
                <p className="text-sm text-blue-600">
                  Get your highlight reel in seconds
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <BrainIcon className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-800">AI-Powered</h3>
                <p className="text-sm text-blue-600">
                  Smart scene detection and categorization
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-100">
        <p className="text-xs text-blue-500">
          © 2024 Highlight Hub. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-blue-500 hover:text-blue-700 hover:underline underline-offset-4"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-blue-500 hover:text-blue-700 hover:underline underline-offset-4"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BrainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function ListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}

function ZapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
