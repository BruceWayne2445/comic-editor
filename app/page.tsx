</h2>
          <label className="mb-2 block text-xs text-slate-400">Panel title</label>
          <input value={active.title}
            onChange={e => update(activeId, { title: e.target.value })}
            className={field + " mb-4"} />
          <label className="mb-2 block text-xs text-slate-400">Scene prompt</label>
          <textarea value={active.prompt}
            onChange={e => update(activeId, { prompt: e.target.value })}
            rows={6} className={field + " mb-4 resize-y"} />
          <label className="mb-2 block text-xs text-slate-400">Dialogue</label>
          <textarea value={active.dialogue}
            onChange={e => update(activeId, { dialogue: e.target.value })}
            rows={4} className={field + " resize-y"} />
          <p className="mt-5 text-xs leading-5 text-slate-500">
            Scene descriptions are editable. Image generation can be connected later.
          </p>
        </aside>
      </div>
    </main>
  );
}
