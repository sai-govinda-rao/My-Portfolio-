import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Question {
  id: number;
  text: string;
  answer: string;
}

interface Message {
  type: 'user' | 'bot';
  text: string;
  displayText: string;
  isTyping?: boolean;
  isSpeaking?: boolean;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, OnDestroy {

  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  isOpen = false;
  isAnswering = false;
  isSpeaking = false;         // Clara is currently speaking (voice)
  showWelcome = true;
  showWelcomeBubble = false;  // welcome bubble shown AFTER greeting finishes
  showEndMessage = false;
  messages: Message[] = [];
  currentQuestions: Question[] = [];

    private allQuestions: Question[] = [

    // ===== START (INTRO) =====
    {
      id: 1,
      text: '👨‍💻 Tell me about Sai',
      answer: `Sai is an <strong>Associate Data Scientist</strong> who loves solving real-world problems using data. 
      He works with machine learning and deep learning to turn raw data into meaningful insights. 
      What I like about him is  he doesn’t just build models, he focuses on making them useful in real applications.`
    },

    // ===== FOLLOW-UP 1 =====
    {
      id: 2,
      text: '💼 What is his current work experience?',
      answer: `Currently, Sai is working as an <strong>Associate Data Scientist at SpadeCode Intelligence</strong>. 
      He has worked on real business problems like financial data validation and AI-based platforms. 
      He also contributed to building an <strong>AI interview preparation system</strong> using Angular and AI integration.

      He doesn’t just work on models  he builds complete solutions including dashboards and user-facing applications.`
    },

    {
      id: 3,
      text: '🛠️ What are his key skills?',
      answer: `Sai has a strong mix of <strong>Data Science and Development skills</strong>.

      He works with:
      • Python, Machine Learning, Deep Learning  
      • TensorFlow, Scikit-learn, Pandas  
      • Angular for frontend development  
      • Streamlit for deploying ML apps  

      He is good at both <strong>building models and making them usable in real applications</strong>.`
    },

    {
      id: 4,
      text: '🚀 What kind of projects has he built?',
      answer: `Sai has worked on multiple real-world projects across different domains like Computer Vision, NLP, and Finance.

      Some of his key projects include:
      • Drone vs Bird Detection (Computer Vision)  
      • AI vs Real Image Detection  
      • Loan Approval Prediction System  
      • AI Text Detection  

      Each project focuses on solving a practical problem  not just theory.`
    },

    // ===== PROJECT DEEP DIVE =====
    {
      id: 5,
      text: '📊 Tell me about his best project',
      answer: `One of Sai’s strongest projects is <strong>Drone vs Bird Detection</strong>.

      He built a deep learning system that can distinguish drones from birds in aerial images  which is important for surveillance and safety.

      What makes this project strong:
      • Used CNN + Transfer Learning (InceptionV3)  
      • Integrated YOLOv8 for real-time detection  
      • Achieved around <strong>96% accuracy</strong>  

      It clearly shows his ability to solve complex real-world problems.`
    },

    {
      id: 6,
      text: '📈 Any project related to business or finance?',
      answer: `Yes, Sai built a <strong>Loan Approval Prediction System</strong>.

      This project helps financial institutions decide whether to approve a loan.

      Key highlights:
      • Performed EDA and feature engineering  
      • Used multiple ML models  
      • Achieved <strong>ROC-AUC of 0.975</strong>  
      • Focused on reducing financial risk  

      It shows his ability to work on <strong>business-critical problems</strong>.`
    },

    {
      id: 7,
      text: '🤖 Does he work with AI or deep learning?',
      answer: `Yes, that’s actually his strong area.

      Sai has worked on:
      • Image classification using CNN  
      • Transfer learning models like EfficientNet & Inception  
      • NLP-based text classification  

      He focuses on building <strong>accurate and scalable AI solutions</strong>, not just experiments.`
    },

    // ===== IMPACT & WORK STYLE =====
    {
      id: 8,
      text: '📊 How does he solve real-world problems?',
      answer: `Sai follows a structured approach:

      • Understand the problem clearly  
      • Perform data analysis (EDA)  
      • Build and compare models  
      • Optimize based on business needs  
      • Deploy using tools like Streamlit  

      He always focuses on <strong>practical impact, not just accuracy</strong>.`
    },

    {
      id: 9,
      text: '🎯 What are his strengths?',
      answer: `What makes Sai strong is his balance between:

      • <strong>Technical skills</strong> (ML, Deep Learning)  
      • <strong>Development skills</strong> (Angular, APIs)  
      • <strong>Problem-solving mindset</strong>  

      He can take a problem from idea → model → deployment.`
    },

    {
      id: 10,
      text: '🚀 What is he aiming for next?',
      answer: `Sai is aiming to grow into a <strong>Senior Machine Learning Engineer</strong>.

      He wants to work on impactful areas like:
      • AI in real-world applications  
      • Scalable ML systems  
      • Data-driven decision platforms  

      And honestly… I think he’s on the right track 😄`
    }

  ];

  // Welcome text Clara speaks when chat opens
  private readonly WELCOME_TEXT =
    `Hi! I'm Clara  Sai's digital girlfriend. I know everything about him... literally everything. Just pick a question and let's go!`;

  private questionPool: Question[] = [];
  private typingTimers: ReturnType<typeof setTimeout>[] = [];
  private audioCtx: AudioContext | null = null;
  private userIsScrolling = false;
  private scrollTimer: ReturnType<typeof setTimeout> | null = null;
  private speechSynth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voiceLoadTimer: ReturnType<typeof setTimeout> | null = null;

  // ── AUDIO FILE FALLBACK (uncomment when you have the file) ──────
  // Place your audio file at: src/assets/audio/clara-greeting.mp3
  // private greetingAudio: HTMLAudioElement | null = null;
  // private answerAudios: Map<number, HTMLAudioElement> = new Map();

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.questionPool = [...this.allQuestions];
    this.setCurrentQuestions();

    // Init speech synthesis
    if ('speechSynthesis' in window) {
      this.speechSynth = window.speechSynthesis;
    }

    // ── AUDIO FILE FALLBACK ──────────────────────────────────────
    // this.greetingAudio = new Audio('assets/audio/clara-greeting.mp3');
  }

  ngOnDestroy(): void {
    this.typingTimers.forEach(t => clearTimeout(t));
    if (this.scrollTimer) clearTimeout(this.scrollTimer);
    if (this.voiceLoadTimer) clearTimeout(this.voiceLoadTimer);
    this.stopSpeaking();
    this.unlockBodyScroll();
  }

  // ─── SCROLL GUARD ─────────────────────────────────────────────
  onMessagesScroll(): void {
    this.userIsScrolling = true;
    if (this.scrollTimer) clearTimeout(this.scrollTimer);
    this.scrollTimer = setTimeout(() => {
      this.userIsScrolling = false;
    }, 1500);
  }

  // ─── TOGGLE ───────────────────────────────────────────────────
  toggleChat(): void {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.playTone('open');
      this.lockBodyScroll();

      // Show popup first, then Clara speaks the greeting
      this.showWelcome = true;
      this.showWelcomeBubble = false;
      this.cdr.detectChanges();

      setTimeout(() => this.scrollToBottom(true), 150);

      // Clara speaks greeting  bubble appears AFTER she finishes
      setTimeout(() => {
        this.speakText(this.WELCOME_TEXT, () => {
          // Greeting done  show welcome bubble and questions
          this.showWelcomeBubble = true;
          this.cdr.detectChanges();
          this.scrollToBottom(true);
        });
      }, 400);

    } else {
      this.stopSpeaking();
      this.unlockBodyScroll();
    }
  }

  // ─── QUESTION HANDLER ─────────────────────────────────────────
  handleQuestion(question: Question): void {
    if (this.isAnswering) return;

    // Stop any ongoing speech
    this.stopSpeaking();
    this.playTone('click');
    this.isAnswering = true;
    this.userIsScrolling = false;

    const previousQuestions = [...this.currentQuestions];
    this.currentQuestions = [];
    this.showWelcome = false;
    this.showWelcomeBubble = false;

    this.questionPool = this.questionPool.filter(q => q.id !== question.id);

    // User bubble
    this.messages.push({
      type: 'user',
      text: question.text,
      displayText: question.text
    });
    this.cdr.detectChanges();
    this.scrollToBottom(true);

    // Bot typing indicator
    const botMsg: Message = {
      type: 'bot',
      text: question.answer,
      displayText: '',
      isTyping: true,
      isSpeaking: false
    };
    this.messages.push(botMsg);
    this.cdr.detectChanges();
    this.scrollToBottom(true);

    // After typing indicator delay  start typewriter + voice together
    const t1 = setTimeout(() => {
      botMsg.isTyping = false;
      botMsg.isSpeaking = true;
      this.isSpeaking = true;
      this.cdr.detectChanges();

      // Start voice and typewriter simultaneously
      this.speakText(question.answer, () => {
        botMsg.isSpeaking = false;
        this.isSpeaking = false;
        this.cdr.detectChanges();
      });

      this.typewriterEffect(botMsg, question.answer, () => {
        this.playTone('complete');
        this.isAnswering = false;
        this.advanceQuestions(previousQuestions, question);
        this.cdr.detectChanges();
        this.scrollToBottom(true);
      });

    }, 800);

    this.typingTimers.push(t1);
  }

  // ─── TYPEWRITER ───────────────────────────────────────────────
  private typewriterEffect(msg: Message, fullText: string, onComplete: () => void): void {
    // Strip HTML for character-by-character display, then reveal HTML version at end
    const plainText = fullText.replace(/<[^>]*>/g, '');
    let charIndex = 0;
    const speed = 22;

    const type = () => {
      if (charIndex < plainText.length) {
        msg.displayText = plainText.substring(0, charIndex + 1) + '<span class="cursor-blink">|</span>';
        charIndex++;
        this.cdr.detectChanges();
        this.scrollToBottom(false);
        const t = setTimeout(type, speed);
        this.typingTimers.push(t);
      } else {
        msg.displayText = fullText;
        this.cdr.detectChanges();
        onComplete();
      }
    };

    type();
  }

  // ─── QUESTION ROTATION ────────────────────────────────────────
  private advanceQuestions(previous: Question[], answered: Question): void {
    if (this.questionPool.length === 0) {
      this.currentQuestions = [];
      this.showEndMessage = true;
      return;
    }

    const remaining = previous.filter(q => q.id !== answered.id);
    const newQuestion = this.questionPool.find(q => !remaining.some(r => r.id === q.id));

    const next: Question[] = [...remaining];
    if (newQuestion) next.push(newQuestion);

    this.currentQuestions = next.slice(0, 3);
  }

  private setCurrentQuestions(): void {
    this.currentQuestions = this.allQuestions.slice(0, 3);
  }

  // ─── SMART SCROLL ─────────────────────────────────────────────
  private scrollToBottom(force: boolean): void {
    if (!force && this.userIsScrolling) return;
    setTimeout(() => {
      try {
        const el = this.messagesContainer?.nativeElement;
        if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
      } catch {}
    }, 50);
  }

  // ─── BODY SCROLL LOCK ─────────────────────────────────────────
  private lockBodyScroll(): void {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    document.body.dataset['scrollY'] = String(scrollY);
  }

  private unlockBodyScroll(): void {
    const scrollY = parseInt(document.body.dataset['scrollY'] || '0', 10);
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollY);
  }

  // ═══════════════════════════════════════════════════════════════
  //  CLARA'S VOICE  Web Speech API (SpeechSynthesis)
  //  Female voice selected automatically from browser voices
  // ═══════════════════════════════════════════════════════════════
  private speakText(text: string, onComplete?: () => void): void {
    if (!this.speechSynth) {
      onComplete?.();
      return;
    }

    // Cancel any current speech
    this.speechSynth.cancel();

    // Strip HTML tags for voice
    const cleanText = text.replace(/<[^>]*>/g, '').replace(/•/g, ',');

    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Voice configuration  cute, feminine settings
    utterance.rate = 0.92;    // slightly slower = warmer feel
    utterance.pitch = 1.25;   // higher pitch = feminine/cute
    utterance.volume = 0.85;

    // Pick best female voice available
    const voice = this.selectFemaleVoice();
    if (voice) utterance.voice = voice;

    utterance.onstart = () => {
      this.ngZone.run(() => {
        this.isSpeaking = true;
        this.cdr.detectChanges();
      });
    };

    utterance.onend = () => {
      this.ngZone.run(() => {
        this.isSpeaking = false;
        this.currentUtterance = null;
        this.cdr.detectChanges();
        onComplete?.();
      });
    };

    utterance.onerror = () => {
      this.ngZone.run(() => {
        this.isSpeaking = false;
        this.currentUtterance = null;
        this.cdr.detectChanges();
        onComplete?.();

        // ── AUDIO FILE FALLBACK ────────────────────────────────
        // If Web Speech API fails, play pre-recorded audio:
        // this.playFallbackAudio(onComplete);
      });
    };

    this.currentUtterance = utterance;
    this.speechSynth.speak(utterance);
  }

  private selectFemaleVoice(): SpeechSynthesisVoice | null {
    if (!this.speechSynth) return null;

    const voices = this.speechSynth.getVoices();
    if (voices.length === 0) return null;

    // Priority list of known good female voices across browsers
    const femalePreferences = [
      'Google UK English Female',
      'Microsoft Zira',
      'Microsoft Hazel',
      'Microsoft Susan',
      'Karen',
      'Samantha',
      'Moira',
      'Tessa',
      'Veena',
      'Fiona',
      'Victoria',
    ];

    for (const pref of femalePreferences) {
      const match = voices.find(v => v.name.includes(pref));
      if (match) return match;
    }

    // Fallback: first voice with 'female' in name or en-US/en-GB
    const femaleByName = voices.find(v =>
      v.name.toLowerCase().includes('female') ||
      v.name.toLowerCase().includes('woman')
    );
    if (femaleByName) return femaleByName;

    // Last resort: any English voice
    const english = voices.find(v => v.lang.startsWith('en'));
    return english || voices[0];
  }

  private stopSpeaking(): void {
    if (this.speechSynth) {
      this.speechSynth.cancel();
    }
    this.isSpeaking = false;
    this.currentUtterance = null;
    // Clear speaking state from all messages
    this.messages.forEach(m => m.isSpeaking = false);
  }

  // ── AUDIO FILE FALLBACK METHOD (uncomment when you have files) ─
  // Place recordings at: src/assets/audio/clara-greeting.mp3
  //                       src/assets/audio/clara-answer-1.mp3 etc.
  //
  // private playFallbackAudio(onComplete?: () => void): void {
  //   if (!this.greetingAudio) { onComplete?.(); return; }
  //   this.greetingAudio.currentTime = 0;
  //   this.greetingAudio.onended = () => onComplete?.();
  //   this.greetingAudio.onerror = () => onComplete?.();
  //   this.greetingAudio.play().catch(() => onComplete?.());
  // }

  // ═══════════════════════════════════════════════════════════════
  //  UI SOUND TONES (kept from original  beep/chime on interact)
  // ═══════════════════════════════════════════════════════════════
  private getAudioContext(): AudioContext {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.audioCtx;
  }

  private playTone(type: 'click' | 'open' | 'complete'): void {
    try {
      const ctx = this.getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now); osc.stop(now + 0.12);

      } else if (type === 'open') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(660, now + 0.15);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now); osc.stop(now + 0.2);

      } else if (type === 'complete') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now); osc.stop(now + 0.25);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.connect(gain2); gain2.connect(ctx.destination);
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(659, now + 0.12);
        gain2.gain.setValueAtTime(0.08, now + 0.12);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
        osc2.start(now + 0.12); osc2.stop(now + 0.38);
      }
    } catch {}
  }
}