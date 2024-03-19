import { StarIcon } from "@heroicons/react/20/solid";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { useEffect, useState } from "react";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmQlMjBtYWRlJTIwY3JhZnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [productData, setProductData] = useState(product);

  const handleAddToCart = () => {
    // Add to cart logic
  };

  useEffect(() => {
    // Fetch product data from backend
  }, []);

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">{/* Breadcrumbs */}</nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-0">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] mt-10 gap-x-0 ml-20">
              <img
                src={productData.images[0].src}
                alt={productData.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              {/* Product name */}
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                {productData.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              {/* Product prices */}
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">₹{productData.price}</p>
                {/* Discounted price and percentage */}
                <p className="opacity-50 line-through">₹{productData.price}</p>
                <p className="text-green-600 font-semibold">
                  {productData.discountPersent}% off
                </p>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Description
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  {productData.description}
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">{/* Review rating */}</div>

              {/* Add to cart button */}
              <form className="mt-10">
                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{
                    px: "2rem",
                    py: "1rem",
                    bgcolor: "#9155fd",
                    "&:hover": { backgroundColor: "##9155fd" },
                  }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Recent reviews and product rating */}
        <section className="pt-10">
          {/* Recent reviews and product rating section */}
        </section>

        {/* Similar products */}
        <section className="pt-10">{/* Similar products section */}</section>
      </div>
    </div>
  );
}
