# Big O Study 📊🧠

A hands-on study project focused on understanding **Big O notation** and algorithmic complexity. This repository contains practical examples, performance benchmarks, and annotated code to help developers gain an intuitive understanding of how different algorithms and data structures behave in terms of **time and space complexity**.

## 🚀 Purpose

This project aims to:

- Provide real-world code examples that demonstrate algorithmic complexity.
- Benchmark performance using JavaScript and Node.js.
- Help developers build intuition around computational efficiency.

## 📁 Structure

```
big-o-study/
├── src/
│   └── examples/
│       ├── findNemo.js       # O(n) linear search
│       ├── logAllPairs.js    # O(n^2) nested loops
│       └── ...               # More examples 
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```

## 🧪 How to Run

### Option 1: Using Docker (Recommended)

Make sure you have [Docker](https://www.docker.com/) installed. Then simply run:

```bash
docker compose up
```

This will start a containerized environment and execute the default example.

---

### Option 2: Run Locally

1. Clone the repository:

```bash
git clone https://github.com/GabiPeron/big-o-study.git
cd big-o-study
```

2. Install dependencies:

```bash
npm install
```

3. Run an example:

```bash
node src/examples/findNemo.js
```

## 🛠 Technologies

- Node.js
- JavaScript (ES6+)
- `perf_hooks` for performance benchmarking

## 👨‍💻 Author

**Gabriel Peron**  
[Website](https://gabrielperon.dev)

## 📄 License

MIT License — feel free to use, learn, and contribute!
