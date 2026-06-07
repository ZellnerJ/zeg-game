# ZEG-GAME

Nowoczesna przeglądarkowa gra 2D typu labirynt, wykonana w technologii HTML5 Canvas oraz JavaScript. Wcielasz się w rolę hakera uwięzionego w systemie korporacji NEON. Twoim celem jest eksploracja, rozwiązywanie zagadek oraz unikanie zabezpieczeń, aby odzyskać wolność.

---

# Cel gry

Celem gry jest przechodzenie przez kolejne poziomy labiryntu i dotarcie do wyjścia. Podczas rozgrywki gracz:
* Eksploruje mapę.
* Zbierze przedmioty (serca, staminę).
* Rozwiązuje zagadki logiczne, które odblokowują dalszą drogę.
* Unika przeciwników i pułapek.
* Zarządza poziomem zdrowia (HP).

> Progresja: Każdy kolejny poziom zwiększa wyzwanie poprzez większe mapy, większą liczbę zagrożeń oraz bardziej wymagające zagadki logiczne.
---
# Menu główne

Menu główne umożliwia pełną kontrolę nad rozgrywką za pomocą czterech głównych przycisków:

- **Zagraj:** Rozpoczyna nową rozgrywkę od pierwszego poziomu.
- **Poziomy:** Wyświetla listę dostępnych etapów z przyciskami. Kliknięcie w wybrany poziom przekierowuje bezpośrednio do wybranej mapy.
- **Ustawienia:** Otwiera dedykowaną stronę z panelem konfiguracyjnym. Pozwala ona dostosować poziom trudności poprzez włączanie i wyłączanie poszczególnych elementów gry za pomocą interaktywnych przycisków:
    - Pułapki (Włącz/Wyłącz)
    - Przeciwnicy (Włącz/Wyłącz)
    - Pioruny staminy (Włącz/Wyłącz)
    - Serduszka HP (Włącz/Wyłącz)
- **Wyjdź:** Zamyka kartę lub kończy sesję w przeglądarce.
---

# Funkcjonalności

### Sterowanie postacią
* Klawisze: WASD lub strzałki.
* Płynny ruch po siatce (grid).
* Kolizje ze ścianami.

### System labiryntu
* Plansza oparta na siatce.
* Punkt startowy i wyjście.
* Przechodzenie między poziomami po rozwiązaniu zagadki.

### Zagadki
* Okienka z pytaniami logicznymi rozmieszczone w labiryncie.
* Poprawna odpowiedź jest wymagana do odblokowania wyjścia.
* System komunikatów o poprawności odpowiedzi.

### Zagrożenia i HP
* Przeciwnicy patrolujący korytarze.
* Pułapki odbierające HP.
* Ekran „Game Over” po utracie całego zdrowia.

### Interfejs użytkownika (UI)
* Aktualny poziom.
* Pasek zdrowia (HP).
* Pasek staminy.
* Komunikaty zwycięstwa, porażki i statusu zagadek.
* Styl: prosty, czytelny i responsywny.
*  Przyciski nawigacyjne: na dole ekranu dodano przyciski „Następny” i „Poprzedni”, umożliwiające łatwiejsze przeglądanie kolejnych labiryntów

---

# Technologie

Projekt został wykonany przy użyciu:
* **HTML5** (struktura i Canvas)
* **CSS3** (wygląd i UI)
* **JavaScript** (logika gry, kolizje, AI przeciwników)

# Struktura projektu

```text
.
├── assets/                 # Zasoby globalne
│   ├── pulapka.png
│   ├── serce.png
│   └── stamina.png
├── poziomy/                # Logika i widoki poziomów
│   ├── bloczek.jpg
│   ├── potwor.png
│   ├── pulapka.png
│   ├── serce.png
│   ├── stamina.png
│   ├── zagadka.png
│   ├── poziomy.css
│   ├── poziom1.html
│   ├── poziom1.js
│   ├── poziom2.html
│   ├── poziom2.js
│   ├── poziom3.html
│   ├── poziom3.js
│   ├── poziom4.html
│   ├── poziom4.js
│   ├── poziom5.html
│   └── poziom5.js
├── skrypty/                # Wspólne skrypty funkcjonalne
│   └── movement.js
├── Pozostale/              # ui menu
│   ├── poz.css
│   └── poziomy.html
│   └── ustawienia.js
│   └──ustawienia html
│   └──ustawienia css
├── index.html              # Strona główna / menu gry
├── tytulowa.css
├── Frame.png
├── Projekt.pdf
├── Projekt.xlsx
├── README.md
├── harmonogram.pdf
└── README.md
```
# Zarządzanie projektem

Projekt realizowany zgodnie z metodyką Kanban oraz harmonogramem opracowanym w formie wykresu Gantta.
- Narzędzia: Git, GitHub, Trello
- Etapy realizacji: analiza, projektowanie, implementacja, testowanie, wdrożenie.
# Uruchomienie projektu

1. **Pobranie repozytorium:**
   `git clone https://github.com/ZellnerJ/zeg-game.git`
2. **Uruchomienie:**
   - Otwórz plik `index.html` bezpośrednio w przeglądarce lub użyj rozszerzenia **Live Server** w Visual Studio Code.
# Testowanie

Testowane elementy:
- kolizje
- przechodzenie poziomów
- działanie zagadek
- system HP
- responsywność
- wydajność gry

# Możliwości rozwoju

Planowane rozszerzenia:
- generator losowych labiryntów
- zapis stanu gry
- multiplayer
- ranking graczy
- dodatkowe typy przeciwników
- system umiejętności postaci
- Integracja z bazą danych SQL w celu przechowywania wyników graczy w tabeli rekordów.
- Implementacja systemu dziennego logowania z unikalnymi bonusami dla gracza za regularność.
- Dodanie trybu "Speedrun" z licznikiem czasu dla każdego poziomu.
- Opracowanie systemu dynamicznej zmiany oświetlenia zależnie od stanu staminy gracza.
- Wprowadzenie wsparcia dla kontrolerów (gamepadów) w celu poprawy wygody sterowania.
# Dokumentacja

Dokumentacja projektu zawiera:
- opis systemu
- wymagania funkcjonalne
- wymagania niefunkcjonalne
- dokumentację kodu


# Licencja

Projekt edukacyjny realizowany w celach dydaktycznych






