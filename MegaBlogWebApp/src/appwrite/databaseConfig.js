import conf from "../conf/conf";
import { Client, Databases, Query } from "appwrite";

export class DataBaseService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(client);
  }

  //   CRUD Methods.

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwritCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: createPost :: error : ", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwritCollectionId,
        queries
      );
    } catch (error) {
      console.error("Appwrite service :: getPosts :: error : ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwritCollectionId,
        slug
      );
    } catch (error) {
      console.error("Appwrite service :: getPost :: error : ", error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwritCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error : ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwritCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deletePost :: error : ", error);
      return false;
    }
  }
}

const dataBaseService = new DataBaseService();

export default dataBaseService;
