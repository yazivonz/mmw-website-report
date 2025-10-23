import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FloatingBubbles from '@/components/FloatingBubbles';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of error detecting codes?",
    options: [
      "To encrypt data",
      "To compress data",
      "To detect errors in transmitted or stored data",
      "To speed up data transmission"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Which error detection method adds a single bit to make the number of 1s even or odd?",
    options: ["Checksum", "CRC", "Parity Bit", "Hamming Code"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What does CRC stand for?",
    options: [
      "Circular Redundancy Check",
      "Cyclic Redundancy Check",
      "Computer Response Code",
      "Central Resource Control"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which error detection method can both detect AND correct errors?",
    options: ["Parity Bit", "Checksum", "Hamming Code", "Simple parity"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "In data transmission, what happens during the 'checking' phase?",
    options: [
      "Data is encrypted",
      "Data is compressed",
      "Error detection code is verified",
      "Data is stored"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "What is a checksum?",
    options: [
      "A method to encrypt passwords",
      "A sum calculated from data to verify integrity",
      "A type of compression algorithm",
      "A network protocol"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which of these is NOT a type of error that can occur during data transmission?",
    options: [
      "Single-bit error",
      "Burst error",
      "Random error",
      "Compression error"
    ],
    correctAnswer: 3
  },
  {
    id: 8,
    question: "What is the main advantage of CRC over simple parity?",
    options: [
      "It's faster",
      "It can detect multiple-bit errors more reliably",
      "It uses less bandwidth",
      "It can compress data"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "During data encoding, what is added to the original data?",
    options: [
      "Encryption keys",
      "Redundant bits for error detection",
      "Compression metadata",
      "Network headers only"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "What happens at the reception phase in error detection?",
    options: [
      "Data is sent to the receiver",
      "Data is encoded with error detection bits",
      "Received data is prepared for error checking",
      "Errors are corrected automatically"
    ],
    correctAnswer: 2
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answerIndex });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const isAllAnswered = questions.every((q) => selectedAnswers[q.id] !== undefined);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Header with 3D Animation */}
          <div className="text-center mb-12 relative">
            <div className="quiz-header-3d absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16 opacity-20"></div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 text-primary animate-fade-in">
              Test Your Knowledge
            </h1>
            <p className="text-lg text-muted-foreground">
              Answer all 10 questions about Error Detecting Codes
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-8">
            {questions.map((question, index) => (
              <Card
                key={question.id}
                className="glass-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-neon animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="quiz-number-badge">
                      {question.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold mb-4 text-foreground">
                        {question.question}
                      </h3>
                      <div className="space-y-3">
                        {question.options.map((option, optionIndex) => (
                          <button
                            key={optionIndex}
                            onClick={() => handleAnswerSelect(question.id, optionIndex)}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                              selectedAnswers[question.id] === optionIndex
                                ? 'border-primary bg-primary/10 shadow-glow'
                                : 'border-border hover:border-primary/50 hover:bg-accent/50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-5 h-5 rounded-full border-2 transition-all ${
                                  selectedAnswers[question.id] === optionIndex
                                    ? 'border-primary bg-primary'
                                    : 'border-muted-foreground'
                                }`}
                              >
                                {selectedAnswers[question.id] === optionIndex && (
                                  <div className="w-full h-full rounded-full bg-background scale-50"></div>
                                )}
                              </div>
                              <span className="text-foreground">{option}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Submit Button */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={handleSubmit}
              disabled={!isAllAnswered}
              className="bg-primary hover:bg-accent text-background font-orbitron text-lg px-12 py-6 shadow-glow disabled:opacity-50 disabled:shadow-none"
            >
              Submit Quiz
            </Button>
            {!isAllAnswered && (
              <p className="mt-4 text-muted-foreground text-sm">
                Please answer all questions before submitting
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Results Dialog */}
      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="sm:max-w-md glass-card border-primary/50">
          <DialogHeader>
            <div className="mx-auto mb-4 relative">
              <div className="results-trophy-3d"></div>
            </div>
            <DialogTitle className="text-center text-3xl font-orbitron text-primary animate-scale-in">
              Good Job! 🎉
            </DialogTitle>
            <DialogDescription className="text-center space-y-4 pt-4">
              <div className="text-4xl font-bold text-primary animate-pulse-glow">
                {score} / {questions.length}
              </div>
              <p className="text-lg text-foreground">
                {score === questions.length
                  ? "Perfect score! You're an expert!"
                  : score >= 7
                  ? "Great job! You know your stuff!"
                  : score >= 5
                  ? "Good effort! Keep learning!"
                  : "Keep studying and try again!"}
              </p>
              
              {/* Detailed Results */}
              <div className="mt-6 space-y-2 text-left max-h-60 overflow-y-auto">
                {questions.map((question) => {
                  const isCorrect = selectedAnswers[question.id] === question.correctAnswer;
                  return (
                    <div
                      key={question.id}
                      className={`p-3 rounded-lg border-2 ${
                        isCorrect
                          ? 'border-green-500/50 bg-green-500/10'
                          : 'border-red-500/50 bg-red-500/10'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1 text-sm">
                          <p className="font-semibold text-foreground">Q{question.id}: {question.question}</p>
                          {!isCorrect && (
                            <p className="text-muted-foreground mt-1">
                              Correct answer: {question.options[question.correctAnswer]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 glass-card rounded-lg border border-primary/30">
                <p className="text-sm text-muted-foreground font-medium">
                  📸 Please take a screenshot of your score for your records!
                </p>
              </div>

              <Button
                onClick={() => {
                  setShowResults(false);
                  setSelectedAnswers({});
                  setScore(0);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full mt-4 bg-primary hover:bg-accent text-background font-orbitron"
              >
                Try Again
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Quiz;
