import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductDetailClient } from "./product-detail-client";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);
  
  if (!product) {
    return {
      title: "Product Not Found | PythonX Trading",
    };
  }

  return {
    title: `${product.name} | PythonX Trading`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ProductDetailClient product={product} />
      </main>
      <Footer />
    </div>
  );
}
