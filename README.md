# fluent.kafe.lorem.js
fluent kafe lorem

// palavras
// paragrafos
// frases

token.paragraphs(2).withRangeOfWords(10, 100)

a.list(10).composedOfWords(10)

lorem.words(10, 20).asString();
lorem.words(10).asHtml();
lorem.words(10).accented().asString()
lorem.seedForRandom(5).words(10).accented().asString()

lorem.list(5).ofWords(10, 20).accented().asString();
lorem.list(1,10).ofWords(10, 20).asHtml();

lorem.paragraphs(2).withTopic(1, 10).asString();
lorem.paragraphs(2).withTopic(1, 10).withRangeOfWords(5, 10);