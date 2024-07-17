const url = "https://am-power-trading-admin.vercel.app/api/products";

async function getData() {
  const dataToSave = {
    name: "Novo produto",
    brand: "Nova marca",
    category: "cat",
    subCategory: "subcat",
    quantityInStock: 5,
    price: 345,
    descripiton: "uma descricap",
    imageUrl:
      "https://res.cloudinary.com/ddbluayu9/image/upload/v1721217655/produtos/xggt2gkenzpgaz6fnn9h.png",
  };

  try {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(dataToSave),
    });

    console.log(await data.json());
  } catch (error) {
    console.log(error);
  }
}

getData();
