package gpms.DAL;

import java.net.UnknownHostException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;

import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.MongoException;

public class MongoDBConnector {
	private final static Logger logger = LoggerFactory
			.getLogger(MongoDBConnector.class);

	private static final int port = 27017;
	private static final String host = "localhost";
	private static MongoClient mongo = null;

	static Mongo connection = null;
	static DB db = null;
	static MongoDBConnector theInstance = null;
	private static String dbName = "GPMS";

	private static final String DBNAME = "todoapp";

	private static Morphia morphia;
	private static Datastore ds;

	public static MongoClient getMongo() {
		if (mongo == null) {
			try {
				// mongo = new MongoClient("127.0.0.1", 27017);
				// Mongo mongo = new Mongo(new
				// MongoURI("mongodb://localhost/mjormIsFun"));
				// mongodb://db1.example.net,db2.example.net:2500/?replicaSet=test
				// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
				mongo = new MongoClient(host, port);
				logger.debug("New Mongo created with [" + host + "] and ["
						+ port + "]");
			} catch (MongoException e) {
				logger.error(e.getMessage());
			}
		}
		return mongo;
	}

	// For MySQL
	public Connection Get_Connection() throws Exception {
		try {
			String connectionURL = "jdbc:mysql://localhost:3306/db_socialnetwork";
			java.sql.Connection connection = null;
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			connection = DriverManager.getConnection(connectionURL, "root",
					"123456789");
			return connection;
		} catch (SQLException e) {
			throw e;
		} catch (Exception e) {
			throw e;
		}
	}

	public MongoDBConnector(String dataBaseName) throws UnknownHostException,
			MongoException {
		if (mongo == null) {
			mongo = new MongoClient("127.0.0.1", 27017);
			// Mongo mongo = new Mongo(new
			// MongoURI("mongodb://localhost/mjormIsFun"));
			// mongodb://db1.example.net,db2.example.net:2500/?replicaSet=test
			// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]

			Morphia morphia = new Morphia();
			ds = morphia.createDatastore(mongo, dataBaseName);
		}
	}

	public Datastore readDatabase() {
		return ds;
	}

	public static MongoDBConnector getMongoDBInstance() {
		if (connection == null) {
			synchronized (MongoDBConnector.class) {
				if (connection == null) {
					try {
						theInstance = new MongoDBConnector(dbName);
					} catch (UnknownHostException e) {
						e.printStackTrace();
					}
				}
			}
		}
		return theInstance;
	}

	public DBCursor find(DBObject ref, DBObject keys, String collName) {
		DBCollection coll = db.getCollection(collName);
		DBCursor cur = coll.find(ref, keys);
		return cur;
	}

	public DBCursor find(DBObject ref, DBObject keys, int start, int limit,
			String collName) {
		DBCursor cur = find(ref, keys, collName);
		return cur.limit(limit).skip(start);
	}

	public int update(DBObject find, DBObject update, boolean upsert,
			boolean multi, String collName) {
		DBCollection coll = db.getCollection(collName);
		int count = coll.update(find, update, upsert, multi).getN();
		return count;
	}

	public int update(DBObject find, DBObject update, String collName) {
		DBCollection coll = db.getCollection(collName);
		int count = coll.update(find, update).getN();
		return count;
	}

	public int deleteByDbs(DBObject dbs, String collName) {
		DBCollection coll = db.getCollection(collName);
		int count = coll.remove(dbs).getN();
		return count;
	}

	public int deleteById(String id, String collName) {
		DBCollection coll = db.getCollection(collName);
		return coll.remove(new BasicDBObject("_id", new ObjectId(id))).getN();

	}

	public void insertBatch(ArrayList<DBObject> dbses, String collName) {
		DBCollection coll = db.getCollection(collName);
		coll.insert(dbses);
	}

	public void insert(DBObject dbs, String collName) {
		DBCollection coll = db.getCollection(collName);
		try {
			coll.insert(dbs);
		} catch (MongoException me) {
			System.out.println(me.getMessage());
		}
	}

	private void createCollection(String collName) {
		DBObject dbs = new BasicDBObject();
		db.createCollection(collName, dbs);
	}
}
