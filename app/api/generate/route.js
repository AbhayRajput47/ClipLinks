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

    if (!body.url || !body.shorturl) {
      return Response.json({
        success: false,
        error: true,
        message: "URL and short URL are required",
      }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("cliplinks");
    const collection = db.collection("url");

    // Check if short URL already exists
    const existingUrl = await collection.findOne({ shorturl: body.shorturl });
    if (existingUrl) {
      return Response.json({
        success: false,
        error: true,
        message: "Short URL already exists",
      }, { status: 400 });
    }

    // Save to DB
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return Response.json({
      success: true,
      error: false,
      message: "URL Generated Successfully",
    }, { status: 201 });

  } catch (err) {
    console.error("API Error:", err); // shows in Vercel logs
    return Response.json({
      success: false,
      error: true,
      message: "Internal Server Error",
    }, { status: 500 });
  }
}
