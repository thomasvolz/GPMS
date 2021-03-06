package gpms.gui.test;

import junit.framework.TestCase;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.MongoClient;

public class BandManagerTestCase extends TestCase {

	Datastore datastore;

	@Override
	protected void setUp() throws Exception {
		MongoClient mongo = new MongoClient("127.0.0.1", 27017);
		mongo.dropDatabase("bandmanager");
		Morphia morphia = new Morphia();

		morphia.mapPackage("com.bandmanager.model");
		datastore = morphia.createDatastore(mongo, "bandmanager");
		datastore.ensureIndexes();

	}

	public void testCanSaveAndLoadABand() {
		// Band band = new Band();
		// band.setName("Love Burger");
		// band.getMembers().add("Jim");
		// band.getMembers().add("Joe");
		// band.getMembers().add("Frank");
		// band.getMembers().add("Tom");
		// band.setGenre("Rock");
		//
		// datastore.save(band);
		//
		// assertEquals(band, datastore.get(Band.class, band.getId()));

	}

	// public void testCanAddAndDeleteSongsToABand() {
	// Band band = new Band();
	// band.setName("Love Burger");
	// band.getMembers().add("Jim");
	// band.getMembers().add("Joe");
	// band.getMembers().add("Frank");
	// band.getMembers().add("Tom");
	// band.setGenre("Rock");
	//
	// datastore.save(band);
	//
	// Song song1 = new Song("Well Done");
	// Song song2 = new Song("Free Bird");
	//
	// datastore.save(song1);
	// datastore.save(song2);
	//
	// assertEquals(song1, datastore.get(Song.class, song1.getId()));
	// assertEquals(song2, datastore.get(Song.class, song2.getId()));
	//
	// band.getSongs().add(song1);
	// band.getSongs().add(song2);
	//
	// datastore.save(band);
	//
	// assertEquals(2, datastore.get(Band.class,
	// band.getId()).getSongs().size());
	//
	// datastore.delete(song2);
	// assertNull(datastore.get(Song.class, song2.getId()));
	//
	// boolean exceptionThrown = false;
	//
	// try {
	// datastore.get(Band.class, band.getId());
	// } catch (RuntimeException e) {
	// if (e.getCause() instanceof MappingException)
	// exceptionThrown = true;
	// }
	//
	// assertTrue(exceptionThrown);
	// }
	//
	// public void testCanQueryForABand() {
	// Band band = new Band();
	// band.setName("Love Burger");
	// band.getMembers().add("Jim");
	// band.getMembers().add("Joe");
	// band.getMembers().add("Frank");
	// band.getMembers().add("Tom");
	// band.setGenre("Rock");
	//
	// band.setInfo(new ContactInfo("Brooklyn", "718-555-5555"));
	//
	// datastore.save(band);
	//
	// Song song1 = new Song("Well Done");
	// Song song2 = new Song("Free Bird");
	//
	// datastore.save(song1);
	// datastore.save(song2);
	//
	// assertEquals(song1, datastore.get(Song.class, song1.getId()));
	// assertEquals(song2, datastore.get(Song.class, song2.getId()));
	//
	// band.getSongs().add(song1);
	// band.getSongs().add(song2);
	//
	// datastore.save(band);
	//
	// Query query = datastore.createQuery(Band.class).filter("name = ",
	// "Love Burger");
	//
	// Band result = (Band) query.asList().get(0);
	// assertEquals(band, result);
	//
	// query =
	// datastore.createQuery(Band.class).field("name").equal("Love Burger");
	// result = (Band) query.asList().get(0);
	// assertEquals(band, result);
	//
	//
	// query =
	// datastore.createQuery(Band.class).field("info.city").equal("Brooklyn");
	// result = (Band) query.asList().get(0);
	// assertEquals(band, result);
	//
	// query =
	// datastore.createQuery(Band.class).field("info.city").equal("Queens").order("name").limit(100);
	// assertEquals(0, query.asList().size());
	// }
	//
	// public void testCannotInsertDuplicateBands() {
	//
	// Band band1 = new Band();
	// band1.setName("Love Burger");
	// datastore.save(band1);
	//
	// Band band2 = new Band();
	// band2.setName("Love Burger");
	// datastore.save(band2);
	// }

}
