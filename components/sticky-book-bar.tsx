export function StickyBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-linen/95 p-3 backdrop-blur sm:hidden">
      <a
        href="#book"
        className="flex w-full items-center justify-center rounded-full bg-ink py-3 text-sm font-medium text-linen"
      >
        Book Now
      </a>
    </div>
  );
}
