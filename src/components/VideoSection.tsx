import { DotGrid } from './DotGrid';
import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface VideoItem {
  src: string;
  label: string;
  tag: string;
  description: string;
  poster?: string;
}

const workshopVideos: VideoItem[] = [
  {
    src:         '/content/workshop.mp4',
    label:       'Workshop Highlights',
    tag:         'Highlights Reel',
    description: 'Highlights from our sessions. The live builds, the demos, and the moment something actually works.',
  },
  {
    src:         'https://media.githubusercontent.com/media/syncailabs-creator/unithink-school/master/public/content/ws_video2.mp4',
    label:       'Student Development Program',
    tag:         'Student SDP',
    description: 'Students building and deploying AI agents in real time.',
  },
  {
    src:         '/content/ws_video3.mp4',
    label:       'Faculty FDP Program',
    tag:         'Faculty FDP',
    description: 'Faculty mastering AI tools for teaching and research.',
  },
  {
    src:         'https://media.githubusercontent.com/media/syncailabs-creator/unithink-school/master/public/content/ws_video4.mp4',
    label:       'Corporate Training',
    tag:         'Corporate',
    description: 'Teams moving from AI awareness to production-ready automation.',
  },
  {
    src:         '/content/ws_video5.mp4',
    label:       'Pre AI Summit India 2025 at GTU',
    tag:         'AI Summit',
    description: 'Live showcase at GTU — teams demoing AI products built during the summit.',
  },
  {
    src:         '/content/fac2.mp4',
    label:       'Student Development Program',
    tag:         'Student SDP',
    description: 'Students building and deploying AI agents in real time.',
  },
  {
    src:         '/content/fac3.mp4',
    label:       'Pre AI Summit India 2025 at GTU',
    tag:         'AI Summit',
    description: 'Live showcase at GTU — teams demoing AI products built during the summit.',
  },
];

interface VideoCardProps {
  video: VideoItem;
  index: number;
  aspectRatio?: string;
  size?: 'featured' | 'portrait';
  onUnmute?: (videoEl: HTMLVideoElement) => void;
  registerVideo?: (el: HTMLVideoElement | null) => void;
}

function VideoCard({ video, index, aspectRatio = '9/16', size = 'portrait', onUnmute, registerVideo }: VideoCardProps) {
  const videoRef     = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) v.play().catch(() => {});
        else { v.pause(); v.muted = true; setMuted(true); }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const newMuted = !muted;
    v.muted = newMuted;
    setMuted(newMuted);
    if (!newMuted && onUnmute) onUnmute(v);
  };

  const openFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    videoRef.current?.requestFullscreen?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.215, 0.61, 0.355, 1] }}
      className="group bg-color-bg rounded-2xl border border-color-border overflow-hidden shadow-soft hover:border-color-accent/40 hover:shadow-xl hover:shadow-color-accent/8 transition-all duration-500 flex flex-col"
    >
      {/* Video wrapper — aspect ratio locked, no cropping */}
      <div
        ref={containerRef}
        className="relative bg-black overflow-hidden w-full"
        style={{ aspectRatio }}
      >
        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-color-bg-2">
            <div className="w-12 h-12 rounded-xl bg-color-accent/10 flex items-center justify-center text-color-accent">
              <Volume2 className="w-6 h-6 opacity-40" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-color-text-muted font-semibold">{video.label}</p>
            <p className="text-[9px] text-color-text-muted">Video coming soon</p>
          </div>
        ) : (
          <video
            ref={(el) => { (videoRef as React.RefObject<HTMLVideoElement | null>).current = el; registerVideo?.(el); }}
            src={video.src}
            poster={video.poster}
            className="w-full h-full object-contain"
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={video.label}
            onLoadedData={() => setReady(true)}
            onError={() => setError(true)}
          />
        )}

        {/* Loading spinner — shown until video is ready */}
        {!ready && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <div className="w-10 h-10 rounded-full border-2 border-color-accent border-t-transparent animate-spin" />
          </div>
        )}

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Controls — bottom right on hover */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={toggleMute}
            className="w-8 h-8 rounded-lg bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            aria-label={muted ? 'Unmute video' : 'Mute video'}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            onClick={openFullscreen}
            className="w-8 h-8 rounded-lg bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            aria-label="Open fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Tag pill — top left */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-sm text-white text-[9px] font-medium uppercase tracking-[0.06em]">
            {video.tag}
          </span>
        </div>

        {/* Sound-off hint */}
        <div className="absolute bottom-3 left-3 opacity-70 group-hover:opacity-0 transition-opacity duration-300">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/50 text-white text-[9px] font-semibold">
            <VolumeX className="w-2.5 h-2.5" /> silent
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className={cn('flex flex-col gap-1', size === 'featured' ? 'p-5' : 'p-3.5')}>
        <h3 className={cn(
          'font-heading font-bold text-color-text tracking-tight leading-snug',
          size === 'featured' ? 'text-base md:text-lg' : 'text-sm'
        )}>
          {video.label}
        </h3>
        <p className={cn('text-color-text-muted leading-relaxed', size === 'featured' ? 'text-sm' : 'text-xs')}>
          {video.description}
        </p>
      </div>
    </motion.div>
  );
}

interface VideoSectionProps {
  compact?: boolean;
}

export function VideoSection({ compact = false }: VideoSectionProps) {
  const featured  = workshopVideos[0];
  const portraits = compact ? workshopVideos.slice(1, 3) : workshopVideos.slice(1, 5);

  // All active video elements — when one unmutes, mute all others
  const allVideoEls = useRef<Set<HTMLVideoElement>>(new Set());

  const handleUnmute = (unmuteEl: HTMLVideoElement) => {
    allVideoEls.current.forEach(el => {
      if (el !== unmuteEl) { el.muted = true; }
    });
  };

  // Register a video element into the shared set
  const registerVideo = (el: HTMLVideoElement | null) => {
    if (el) allVideoEls.current.add(el);
  };

  return (
    <section className="section bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
      <DotGrid />
      {/* Background blobs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-color-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-color-cta/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-4 max-w-[640px]"
          >
            <span className="type-h6 text-color-accent">Workshop Recordings</span>
            <h2 className="type-h2 text-color-text">See It Happen Live.</h2>
            <p className="type-p1 text-color-text-2">
              Real footage from the workshop floor. Live builds, project demos, and AI systems going live before the session ends.
            </p>
            <p className="type-p2 text-color-text-muted">
              Auto-plays on scroll · Hover for controls · Click fullscreen
            </p>
          </motion.div>

          {/* ── Featured landscape video (full width) ── */}
          <VideoCard
            video={featured}
            index={0}
            aspectRatio="16/9"
            size="featured"
            onUnmute={handleUnmute}
            registerVideo={registerVideo}
          />

          {/* ── Portrait videos in a row below ── */}
          <div className={cn(
            'grid gap-4',
            compact
              ? 'grid-cols-2'
              : 'grid-cols-2 md:grid-cols-4'
          )}>
            {portraits.map((video, i) => (
              <VideoCard
                key={video.src}
                video={video}
                index={i + 1}
                aspectRatio="9/16"
                size="portrait"
                onUnmute={handleUnmute}
                registerVideo={registerVideo}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
