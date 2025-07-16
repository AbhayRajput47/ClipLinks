// import clientPromise from "@/lib/mongodb"


// export async function POST(request){

//     const body = await request.json();
//     const client = await clientPromise;
//     const db = client.db("cliplinks")
//     const collection= db.collection("url")

//     // check if the short url exists
//     const existingUrl= await collection.findOne({shorturl: body.shorturl})
//     if(existingUrl){
//         return Response.json({success:false,error: true, message: 'URL already exists'})
        
//     }
//    const result= await collection.insertOne({
//         url: body.url,
//         shorturl: body.shorturl,
//     })
//     return Response.json({success:true,error: false, message:'URL Generated Successfully'})
// }
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("cliplinks");
    const collection = db.collection("url");

    // Check if short URL already exists
    const existingUrl = await collection.findOne({ shorturl: body.shorturl });
    if (existingUrl) {
      return Response.json({
        success: false,
        error: true,
        message: "URL already exists",
      });
    }

    // Insert new URL
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return Response.json({
      success: true,
      error: false,
      message: "URL Generated Successfully",
    });
  } catch (err) {
    console.error("Generate API Error:", err);
    return Response.json({
      success: false,
      error: true,
      message: err.message || "Internal Server Error",
    }, { status: 500 });
  }
}
