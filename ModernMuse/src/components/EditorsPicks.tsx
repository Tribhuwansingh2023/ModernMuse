import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { FadeInOnScroll } from "./FadeInOnScroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function EditorsPicks() {
  const picks = articles.filter((a) => a.editorsPick);

  return (
    <section className="py-16 border-b border-border">
      <div className="editorial-container">
        <FadeInOnScroll>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">Curated</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">Editors' Picks</h2>
            </div>
          </div>
        </FadeInOnScroll>

        <div className="relative px-0 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              skipSnaps: false,
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {picks.map((article, i) => (
                <CarouselItem
                  key={article.slug}
                  className="pl-4 basis-[80%] sm:basis-[45%] lg:basis-[30%]"
                >
                  <FadeInOnScroll delay={i * 80}>
                    <Link to={`/article/${article.slug}`} className="group block">
                      <div className="overflow-hidden rounded-sm mb-3 transition-shadow duration-300 group-hover:shadow-lg">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <span className="category-badge mb-1">{article.category}</span>
                      <h3 className="text-base font-bold leading-snug group-hover:text-accent transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 font-sans line-clamp-2">
                        {article.excerpt}
                      </p>
                    </Link>
                  </FadeInOnScroll>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-0 top-1/3 bg-background/80 backdrop-blur-sm border-border hover:bg-background shadow-md" />
            <CarouselNext className="hidden md:flex -right-0 top-1/3 bg-background/80 backdrop-blur-sm border-border hover:bg-background shadow-md" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
