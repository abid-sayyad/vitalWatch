import * as MongoDB from "mongodb";

export class DatabaseService {
  private static instance: DatabaseService;
  private dbClient: MongoDB.MongoClient = new MongoDB.MongoClient(
    process.env.MONGO_URI!
  );
  private constructor() {}

  /**
   * Initializes the database client instance
   * @returns {Promise<void>} Returns a promise which resolves when the database is successfully connected.
   */
  public initialize = async (): Promise<void> => {
    try {
      await this.dbClient.connect();
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Singleton function to get the database instance
   * @returns {DatabaseService} Returns the database instance
   */
  public static getInstance = (): DatabaseService => {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  };

  /**
   * Returns the Collection Instance of the given database
   * @param {string} collection The Collection Name
   * @param {string} database The Database Name
   * @returns {MongoDB.Collection} The instance
   */

  public getDb = async (
    collection: string,
    database?: string
  ): Promise<MongoDB.Collection> => {
    if (!process.env.MONGO_DB) {
      process.env.MONGO_DB = "test";
    }
    if (process.env.NODE_ENV === "production") {
      return this.dbClient
        .db(`prod_${database ?? process.env.MONGO_DB}`)
        .collection(collection);
    } else {
      return this.dbClient
        .db(`dev_${database ?? process.env.MONGO_DB}`)
        .collection(collection);
    }
  };
}
