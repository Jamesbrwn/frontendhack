import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import Banner from "./components/Banner";
import FileUploader from "./components/FileUploader";
import { Chatbot } from "./components/Chatbot";

export default async function Home() {
  try {
    const documents = await prisma.document.findMany({
      select: {
        fileName: true,
      },
    });
    console.log("Documents fetched from the database:", documents);

    const fileNames = documents.map((document) => document.fileName);
    console.log("File names extracted:", fileNames);

    return (
      <div>
        <Flex className="justify-center items-center mb-10" direction="column" gap={"4"} >
          <Banner />
          <FileUploader />
          <Chatbot fileNames={fileNames} />
        </Flex>
      </div>
    );
  } catch (error) {
    console.error("Error fetching documents from the database:", error);
    // Handle the error gracefully, display an error message, or take appropriate action
    return (
      <div>
        <Flex className="justify-center items-center mb-10" direction="column" gap={"4"} >
          <Banner />
          <FileUploader />
          <Chatbot fileNames={[]} />
        </Flex>
      </div>
    );
  }
}

export const dynamic = "force-dynamic";