export function StickyBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ivory/10 bg-navy/95 p-3 backdrop-blur sm:hidden">
      <a
        href="#book"
        className="flex w-full items-center justify-center rounded-full bg-gold py-3 text-sm font-medium text-navy"
      >
        Book Now
      </a>
    </div>
  );
}
