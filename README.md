# deno-feedspot-scraper

[Deno](https://deno.land/) TypeScript to scrape a list of technology RSS feeds from [Feedspot](https://blog.feedspot.com/).

The script outputs the results to the console in [TSV](https://www.iana.org/assignments/media-types/text/tab-separated-values) format.

## Prerequisites

- [Install Deno](https://deno.land/#installation)

## Run

```sh
deno run --allow-net scrape.ts | tee techfeeds.tsv
```

## Authors

**Andre Silva** [@andreswebs](https://github.com/andreswebs)

## License

This project is licensed under the [Unlicense](UNLICENSE.md).

## Acknowledgements

Based on:

<https://dev.to/siddacool/deno-web-scrapper-3451>
