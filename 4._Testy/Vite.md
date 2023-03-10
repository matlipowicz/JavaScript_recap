npm install -D vitest

dodajemy do package.json skrypty
```js
{
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
}
```

vscode ma wtyczke vitest

* Zaletą vitest jest to, że pracuje na wielu wątkach przez co testy są o wiele szybciej egzekowwane

* Twórcy wzorowali się na asercjach z jest i chai

* Ma wbudowane mockowanie

* Wspiera happy-dom i jest-dom do mockowania API przeglądarki, ale wtedy trzeba zrobić swoją konfigurację w pliku vite.config.ts i plikiem tym automatycznie nadpisujemy defaultową konfigurację:

```js
// vite.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom', // or 'jsdom', 'node'
  },
})
```

Warto na niego zwrócić uwagę ponieważ eksperymentalnie wprowadza type testing, więc można testować typy z TSa

Aby uruchomić testy wpisujemy w CLI (terminalu) vitest

vitest run
vitest watch / vitest dev - to samo
vitest -u - update snapschotów
vitest --ui włącza UI
vitest --silent - testy bez outputu
vitest --coverage - pokrycie testami
vitest --dom - mockuje browser api
vitest --browser - uruchamia test w przeglądarce

import {vi} from "vitest" do mockowania
np. const exFun=vi.fn()
Do mockowania zapytań z API używamy paczki Mock Service Worker