import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({
  auth: process.env.INTERGRATION_NOTION_TOKEN,
});

const pageId = process.env.NOTION_PAGE;
const databaseId = process.env.NOTION_DATABASE_ID;
const blockId = process.env.NOTION_BLOCK;

export const getPage = async () => {
  try {
    const responsePages = await notion.pages.retrieve({
      page_id: pageId,
    });

    const responseBlock = await notion.blocks.retrieve({
      block_id: blockId,
    });

    const responseBlocks = await notion.blocks.children.list({
      block_id: blockId,
    });

    console.log(responseBlocks);
  } catch (error) {
    console.error(error);
  }
};

export const getDatabase = async () => {
  try {
    const response = await notion.databases.query({ database_id: databaseId });

    // console.log(response);
  } catch (error) {
    console.error(error);
  }
};
