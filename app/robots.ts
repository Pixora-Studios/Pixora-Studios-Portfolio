import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // AI / LLM crawlers — explicitly allowed for AEO/GEO indexing
      {
        userAgent: [
          'GPTBot',           // OpenAI ChatGPT
          'ChatGPT-User',     // ChatGPT browsing
          'OAI-SearchBot',    // OpenAI SearchGPT
          'PerplexityBot',    // Perplexity AI
          'ClaudeBot',        // Anthropic Claude
          'anthropic-ai',     // Anthropic crawler
          'Google-Extended',  // Google Bard / Gemini
          'Googlebot',        // Core Google crawler
          'Bingbot',          // Microsoft Bing / Copilot
          'CCBot',            // Common Crawl
          'cohere-ai',        // Cohere Command
          'Meta-ExternalAgent', // Meta AI
          'FacebookBot',      // Meta / Facebook
          'YouBot',           // You.com AI
          'Applebot',         // Apple Siri / Spotlight
          'DuckAssistBot',    // DuckDuckGo AI
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://pixorastudios.com/sitemap.xml',
    host: 'https://pixorastudios.com',
  };
}
