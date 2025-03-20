"use client"

import type { BlogPost } from "@/lib/content-store"

export const initialBlogPosts: BlogPost[] = [
  {
    id: "modern-react-patterns",
    title: "Modern React Patterns for 2023",
    excerpt:
      "Exploring the latest patterns and best practices in React development that will help you write cleaner, more maintainable code.",
    content: `
      <p>React has evolved significantly since its initial release, and with it, the patterns and practices we use to build applications have also matured. In this article, we'll explore some of the most effective patterns that have emerged in the React ecosystem in 2023.</p>
      
      <h2>The Rise of React Hooks</h2>
      <p>Hooks have revolutionized how we write React components, allowing us to use state and other React features without writing classes. Let's look at some advanced hook patterns:</p>
      
      <h3>Custom Hooks for Reusable Logic</h3>
      <p>One of the most powerful aspects of hooks is the ability to extract component logic into reusable functions. For example, a custom hook for handling form state:</p>
      
      <pre><code>
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  
  const resetForm = () => setValues(initialValues);
  
  return { values, handleChange, resetForm };
}
      </code></pre>
      
      <h3>The useReducer Pattern for Complex State</h3>
      <p>When state logic becomes complex, useReducer provides a more structured approach:</p>
      
      <pre><code>
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
      </code></pre>
      
      <h2>Component Composition Patterns</h2>
      <p>React's component model shines when we compose smaller, focused components into larger, more complex UIs.</p>
      
      <h3>The Compound Component Pattern</h3>
      <p>This pattern provides a more expressive and flexible API for components that have multiple parts:</p>
      
      <pre><code>
function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
}

Tabs.List = function TabsList({ children }) {
  return <div className="tabs-list">{children}</div>;
};

Tabs.Tab = function Tab({ children, index }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  
  return (
    <button
      className={activeIndex === index ? 'active' : ''}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
};

Tabs.Panels = function TabsPanels({ children }) {
  return <div className="tabs-panels">{children}</div>;
};

Tabs.Panel = function Panel({ children, index }) {
  const { activeIndex } = useContext(TabsContext);
  
  return activeIndex === index ? <div>{children}</div> : null;
};
      </code></pre>
      
      <p>This allows for a more declarative usage:</p>
      
      <pre><code>
<Tabs>
  <Tabs.List>
    <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
    <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel index={0}>Content 1</Tabs.Panel>
    <Tabs.Panel index={1}>Content 2</Tabs.Panel>
  </Tabs.Panels>
</Tabs>
      </code></pre>
      
      <h2>State Management in 2023</h2>
      <p>While Redux has been the go-to state management solution for years, the React ecosystem now offers more options:</p>
      
      <h3>Context + useReducer for App-Wide State</h3>
      <p>For many applications, the built-in Context API combined with useReducer provides sufficient state management without additional libraries.</p>
      
      <h3>Zustand for Simple, Powerful State</h3>
      <p>Zustand has gained popularity for its simplicity and flexibility:</p>
      
      <pre><code>
import create from 'zustand';

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}

function Controls() {
  const { increasePopulation, removeAllBears } = useStore();
  
  return (
    <>
      <button onClick={increasePopulation}>Add bear</button>
      <button onClick={removeAllBears}>Remove all</button>
    </>
  );
}
      </code></pre>
      
      <h2>Performance Optimization Patterns</h2>
      <p>As applications grow, performance becomes increasingly important.</p>
      
      <h3>Memoization with useMemo and useCallback</h3>
      <p>These hooks help prevent unnecessary re-renders by memoizing values and functions:</p>
      
      <pre><code>
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
      </code></pre>
      
      <h3>Virtualization for Long Lists</h3>
      <p>When rendering long lists, virtualization libraries like react-window can significantly improve performance by only rendering items that are visible:</p>
      
      <pre><code>
import { FixedSizeList } from 'react-window';

function Row({ index, style }) {
  return <div style={style}>Row {index}</div>;
}

function VirtualizedList() {
  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={10000}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>React continues to evolve, and with it, the patterns we use to build applications. By adopting these modern patterns, you can write more maintainable, performant, and expressive React code.</p>
      
      <p>What patterns have you found most effective in your React projects? Share your experiences in the comments below!</p>
    `,
    date: "October 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=1200&text=React+Patterns",
    category: "development",
    tags: ["React", "JavaScript", "Web Development"],
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Senior Frontend Developer",
    },
  },
  {
    id: "machine-learning-intro",
    title: "A Beginner's Guide to Machine Learning",
    excerpt:
      "Breaking down the fundamentals of machine learning in a way that's accessible to developers without a data science background.",
    content: `
      <p>Machine learning can seem intimidating for developers who don't have a background in data science or mathematics. However, with the right approach, anyone with programming experience can start building machine learning models. This guide aims to demystify the basics of machine learning for beginners.</p>
      
      <h2>What is Machine Learning?</h2>
      <p>At its core, machine learning is about creating algorithms that can learn patterns from data and make predictions or decisions without being explicitly programmed to perform the task. Instead of writing rules manually, we provide examples to the algorithm and let it learn the rules.</p>
      
      <h3>Types of Machine Learning</h3>
      <p>There are three main types of machine learning:</p>
      
      <ul>
        <li><strong>Supervised Learning:</strong> The algorithm learns from labeled training data, trying to predict the output given new inputs.</li>
        <li><strong>Unsupervised Learning:</strong> The algorithm works with unlabeled data, trying to find patterns or structure on its own.</li>
        <li><strong>Reinforcement Learning:</strong> The algorithm learns by interacting with an environment, receiving rewards or penalties for its actions.</li>
      </ul>
      
      <h2>Getting Started with Supervised Learning</h2>
      <p>Supervised learning is the most common starting point for beginners. Let's look at a simple example using Python and scikit-learn:</p>
      
      <pre><code>
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load a dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create and train a model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, predictions)
print(f"Model accuracy: {accuracy:.2f}")
      </code></pre>
      
      <p>This simple example demonstrates the typical workflow in supervised learning:</p>
      
      <ol>
        <li>Load and prepare your data</li>
        <li>Split the data into training and testing sets</li>
        <li>Choose and train a model</li>
        <li>Make predictions on new data</li>
        <li>Evaluate the model's performance</li>
      </ol>
      
      <h2>Key Concepts in Machine Learning</h2>
      
      <h3>Features and Labels</h3>
      <p>Features are the input variables used to make predictions. Labels are the output values we're trying to predict in supervised learning.</p>
      
      <h3>Training and Testing</h3>
      <p>We split our data into training data (used to teach the model) and testing data (used to evaluate how well the model generalizes to new data).</p>
      
      <h3>Overfitting and Underfitting</h3>
      <p>Overfitting occurs when a model learns the training data too well, including its noise and outliers, making it perform poorly on new data. Underfitting happens when a model is too simple to capture the underlying pattern in the data.</p>
      
      <h3>Model Evaluation</h3>
      <p>Common metrics for evaluating models include accuracy, precision, recall, F1 score, and area under the ROC curve, depending on the problem type.</p>
      
      <h2>Popular Machine Learning Algorithms</h2>
      
      <h3>Linear Regression</h3>
      <p>Used for predicting continuous values by finding the best-fitting line through the data points.</p>
      
      <h3>Logistic Regression</h3>
      <p>Despite its name, this is a classification algorithm used for predicting binary outcomes.</p>
      
      <h3>Decision Trees</h3>
      <p>Tree-like models that make decisions based on feature values, leading to a prediction.</p>
      
      <h3>Random Forests</h3>
      <p>An ensemble of decision trees that improves prediction accuracy and controls overfitting.</p>
      
      <h3>Support Vector Machines (SVM)</h3>
      <p>Finds the hyperplane that best separates different classes in the feature space.</p>
      
      <h3>K-Nearest Neighbors (KNN)</h3>
      <p>Makes predictions based on the majority class or average value of the k nearest data points.</p>
      
      <h2>Tools and Libraries for Machine Learning</h2>
      
      <h3>Python Libraries</h3>
      <ul>
        <li><strong>scikit-learn:</strong> A user-friendly library for classical machine learning algorithms.</li>
        <li><strong>TensorFlow and PyTorch:</strong> Powerful libraries for deep learning.</li>
        <li><strong>pandas:</strong> Essential for data manipulation and analysis.</li>
        <li><strong>NumPy:</strong> Provides support for large, multi-dimensional arrays and matrices.</li>
        <li><strong>Matplotlib and Seaborn:</strong> For data visualization.</li>
      </ul>
      
      <h3>Online Platforms</h3>
      <ul>
        <li><strong>Kaggle:</strong> Offers datasets, competitions, and notebooks to practice machine learning.</li>
        <li><strong>Google Colab:</strong> Free Jupyter notebooks with GPU support.</li>
        <li><strong>AWS SageMaker, Azure ML, and Google AI Platform:</strong> Cloud platforms for building and deploying machine learning models.</li>
      </ul>
      
      <h2>Next Steps in Your Machine Learning Journey</h2>
      
      <ol>
        <li><strong>Practice with Real Datasets:</strong> Kaggle is a great place to find interesting datasets and competitions.</li>
        <li><strong>Build End-to-End Projects:</strong> Apply what you've learned to solve real problems.</li>
        <li><strong>Learn About Feature Engineering:</strong> This is often more important than the algorithm choice.</li>
        <li><strong>Explore Deep Learning:</strong> Once you're comfortable with the basics, consider diving into neural networks.</li>
        <li><strong>Join Communities:</strong> Engage with other learners and practitioners to share knowledge and get help.</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Machine learning doesn't have to be intimidating. By starting with the fundamentals and gradually building your knowledge, you can incorporate machine learning into your developer toolkit. Remember that practical experience is key—the more you practice, the more intuitive these concepts will become.</p>
      
      <p>What aspects of machine learning are you most interested in exploring? Let me know in the comments!</p>
    `,
    date: "September 28, 2023",
    readTime: "12 min read",
    image: "/placeholder.svg?height=600&width=1200&text=Machine+Learning",
    category: "ai",
    tags: ["Machine Learning", "AI", "Data Science"],
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "AI Enthusiast & Software Engineer",
    },
  },
  {
    id: "cloud-architecture",
    title: "Designing Scalable Cloud Architecture",
    excerpt:
      "Key principles and patterns for designing cloud systems that can scale to millions of users while maintaining performance.",
    date: "August 10, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600&text=Cloud+Architecture",
    category: "devops",
    tags: ["AWS", "Cloud", "Architecture", "DevOps"],
    content: "",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Cloud Architect",
    },
  },
  {
    id: "ux-design-principles",
    title: "UX Design Principles Every Developer Should Know",
    excerpt:
      "Essential user experience concepts that will help developers create more intuitive and user-friendly applications.",
    date: "July 22, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600&text=UX+Design",
    category: "design",
    tags: ["UX", "Design", "Frontend"],
    content: "",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "UX Engineer",
    },
  },
  {
    id: "microservices-vs-monolith",
    title: "Microservices vs. Monolith: Choosing the Right Architecture",
    excerpt: "A practical guide to deciding between microservices and monolithic architectures for your next project.",
    date: "June 15, 2023",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=600&text=Microservices",
    category: "architecture",
    tags: ["Microservices", "Architecture", "System Design"],
    content: "",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Software Architect",
    },
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices in 2023",
    excerpt: "Proven patterns and practices for writing maintainable TypeScript code in large-scale applications.",
    date: "May 3, 2023",
    readTime: "11 min read",
    image: "/placeholder.svg?height=400&width=600&text=TypeScript",
    category: "development",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    content: "",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Senior Frontend Developer",
    },
  },
]

