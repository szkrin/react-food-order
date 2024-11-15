export default function Product() {
    return (
        <div className="bg-zinc-900">
            <img src="../backend/public/images/beef-tacos.jpg" />
            <div className="p-4">
                <h2 className="font-bold text-xl tracking-wider">Mac & Cheese</h2>
                <p className="px-6 py-2 my-3 bg-yellow-900 w-fit place-self-center">$7.99</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque blanditiis eaque nobis magni corrupti quibusdam officiis laboriosam tempore totam dolorem necessitatibus modi consectetur, excepturi voluptatibus ab quis exercitationem vitae?</p>
                <button className="px-6 py-2 mt-8 mb-2 bg-yellow-600 text-yellow-950 font-semibold">Add to Cart</button>
            </div>
        </div>
    )
}