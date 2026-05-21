'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Moon, ShieldCheck, Smile, Brain, PhoneCall, Menu, X } from 'lucide-react';

const moods = [
  { emoji: '😔', label: 'Sad', color: 'from-blue-400' },
  { emoji: '😟', label: 'Anxious', color: 'from-yellow-400' },
  { emoji: '😐', label: 'Neutral', color: 'from-gray-400' },
  { emoji: '🙂', label: 'Good', color: 'from-green-400' },
  { emoji: '😄', label: 'Great', color: 'from-emerald-400' },
];

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 180 }}
    className={`bg-white/70 backdrop-blur-2xl p-8 rounded-[32px] shadow-[0_20px_60px_rgba(124,108,242,0.12)] border ${color}`}
  >
    <div className={`w-16 h-16 rounded-3xl ${color.replace('border', 'bg')} flex items-center justify-center mx-auto mb-6`}>
      <Icon className={`text-${color.split('-')[1]}-700 w-8 h-8`} />
    </div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const WellnessItem = ({ label }) => (
  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md border border-purple-100 hover:shadow-lg transition">
    <Heart className="text-purple-600 flex-shrink-0" />
    <span className="font-medium">{label}</span>
  </div>
);

export default function LetsChatApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodScore, setMoodScore] = useState(82);
  const [chartData] = useState([50, 70, 45, 80, 65, 90, 75]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setMoodScore(Math.min(100, moodScore + 5));
  };

  const handleEmergency = () => {
    alert('🚨 Emergency support activated!\nConnecting to immediate crisis support...');
  };

  const handleTalkToSomeone = () => {
    alert('📞 Connecting you to a mental health professional...');
  };

  const handleExploreWellness = () => {
    alert('🌿 Opening Wellness Hub...');
  };

  const handleStartJourney = () => {
    alert('✨ Starting your wellness journey...');
  };

  const handleExploreApp = () => {
    alert('📱 Exploring the app features...');
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Find Support', href: '#support' },
    { label: 'Wellness Hub', href: '#wellness' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#ede9fe,_transparent_35%),radial-gradient(circle_at_bottom_right,_#bfdbfe,_transparent_30%),linear-gradient(to_bottom_right,_#f8fafc,_#eef2ff,_#f5f3ff)] text-gray-800 overflow-hidden relative" style={{ scrollBehavior: 'smooth' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-purple-100 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-purple-700">Let's Chat</h1>
          <p className="text-sm text-gray-500">Your safe mental wellness companion</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-purple-700 transition"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleEmergency}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-2xl shadow-lg transition hidden sm:block"
            aria-label="Emergency help button"
          >
            Emergency Help
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-purple-100 rounded-lg transition"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white/90 backdrop-blur-lg border-b border-purple-100 px-6 py-4"
        >
          <div className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-purple-700 transition font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                handleEmergency();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-2xl shadow-lg transition"
            >
              Emergency Help
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/70 border border-purple-100 px-4 py-2 rounded-full shadow-sm mb-6">
              <ShieldCheck className="text-purple-600 w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">
                Private • Secure • Judgment-Free
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              A safe space to <span className="text-purple-700">talk</span>, heal, and feel supported.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Connect with trusted mental health professionals, track your wellness,
              and access emotional support from anywhere at any time.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleTalkToSomeone}
                className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-4 rounded-2xl shadow-xl text-lg transition"
                aria-label="Talk to someone button"
              >
                Talk to Someone
              </button>

              <button
                onClick={handleExploreWellness}
                className="bg-white hover:bg-gray-100 border border-purple-200 text-purple-700 px-7 py-4 rounded-2xl shadow-lg text-lg transition"
                aria-label="Explore wellness hub button"
              >
                Explore Wellness Hub
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-40"></div>

            <div className="relative bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[36px] shadow-[0_25px_80px_rgba(124,108,242,0.18)] p-8 overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Smile className="text-purple-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Daily Mood Check-In</h3>
                  <p className="text-sm text-gray-500">How are you feeling today?</p>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-3 mb-8">
                {moods.map((mood, index) => (
                  <button
                    key={`mood-${index}`}
                    onClick={() => handleMoodSelect(mood)}
                    className={`bg-purple-50 hover:bg-purple-100 text-3xl py-4 rounded-2xl transition ${
                      selectedMood?.emoji === mood.emoji ? 'ring-2 ring-purple-600 bg-purple-100' : ''
                    }`}
                    aria-label={`Select ${mood.label} mood`}
                    aria-pressed={selectedMood?.emoji === mood.emoji}
                  >
                    {mood.emoji}
                  </button>
                ))}
              </div>

              {selectedMood && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-purple-600 font-medium mb-4 text-center"
                >
                  ✓ Mood recorded: {selectedMood.label}
                </motion.div>
              )}

              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-6 shadow-inner">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="text-purple-700" />
                  <h4 className="font-semibold">Live Support</h4>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[85%]">
                    <p className="text-gray-700">Hello 👋 How are you feeling today?</p>
                  </div>

                  <div className="bg-purple-600 text-white rounded-2xl p-4 shadow-sm ml-auto max-w-[85%]">
                    <p>I've been feeling overwhelmed lately.</p>
                  </div>

                  <div className="flex gap-2 items-center text-sm text-gray-500 pt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Therapist is typing...
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="support" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Designed for emotional safety and support
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-14">
            Let's Chat combines professional care with modern digital wellness experiences.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={MessageCircle}
              title="Private Conversations"
              description="Secure and confidential chats with verified professionals in a safe digital space."
              color="border-purple-100"
            />
            <FeatureCard
              icon={Brain}
              title="Wellness Resources"
              description="Guided breathing exercises, wellness articles, affirmations, and stress management tools."
              color="border-blue-100"
            />
            <FeatureCard
              icon={PhoneCall}
              title="Emergency Support"
              description="Immediate support access during emotional distress or crisis moments."
              color="border-pink-100"
            />
          </div>
        </div>
      </section>

      {/* Wellness Dashboard */}
      <section id="wellness" className="py-28 px-6 bg-white/50 backdrop-blur-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Personalized wellness dashboard
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Track your emotional wellbeing, journal your thoughts, and build healthier daily habits with intelligent wellness tools.
            </p>

            <div className="space-y-4">
              {[
                'Mood tracking & emotional insights',
                'Daily affirmations and guided breathing',
                'Sleep and stress monitoring',
                'Private wellness journaling'
              ].map((item) => (
                <WellnessItem key={item} label={item} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 text-white rounded-[36px] p-8 shadow-[0_30px_80px_rgba(99,102,241,0.35)] relative overflow-hidden">
              <p className="text-sm opacity-80 mb-3">Mood Score</p>
              <h3 className="text-5xl font-bold mb-4">{moodScore}%</h3>
              <p className="opacity-90">You're improving this week 🌱</p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-xl border border-purple-100">
              <p className="text-gray-500 mb-3">Mindfulness</p>
              <div className="w-24 h-24 rounded-full border-8 border-purple-200 flex items-center justify-center text-2xl font-bold text-purple-700 mx-auto">
                15m
              </div>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-xl border border-blue-100 col-span-1 md:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Weekly Emotional Check-In</h3>
                <Moon className="text-indigo-600" />
              </div>

              <div className="flex items-end justify-between h-40 gap-2 md:gap-4">
                {chartData.map((height, index) => (
                  <motion.div
                    key={`chart-${index}`}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-t from-purple-500 to-blue-400 rounded-t-2xl w-full"
                    aria-label={`Day ${index + 1}: ${height}% mood level`}
                  ></motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            A stigma-free support community
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We believe nobody should struggle alone. Let's Chat creates a calm, supportive, and judgment-free environment for emotional wellness.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[28px] p-8 shadow-xl border border-purple-100 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Anonymous Support</h3>
              <p className="text-gray-600">
                Seek help privately and comfortably without fear of judgment.
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-8 shadow-xl border border-blue-100 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Verified Professionals</h3>
              <p className="text-gray-600">
                Connect with trained and trusted mental health experts.
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-8 shadow-xl border border-pink-100 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Accessible Anywhere</h3>
              <p className="text-gray-600">
                Get support from your phone, tablet, or computer anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-700 to-indigo-700 rounded-[48px] p-8 md:p-14 text-center text-white shadow-[0_40px_100px_rgba(99,102,241,0.35)] relative overflow-hidden backdrop-blur-2xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your mental health matters.
          </h2>

          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Whether you're stressed, overwhelmed, anxious, or simply need someone to talk to — Let's Chat is here for you.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5">
            <button
              onClick={handleStartJourney}
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl transition"
              aria-label="Start your wellness journey"
            >
              Start Your Wellness Journey
            </button>

            <button
              onClick={handleExploreApp}
              className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-2xl text-lg font-semibold transition backdrop-blur-lg"
              aria-label="Explore the app"
            >
              Explore the App
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
