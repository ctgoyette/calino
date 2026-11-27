import { useCallback } from 'react'
import type { CalendarEvent } from '@/types'
import { useCalendarStore } from '@/store/calendarStore'
import { useSettingsStore } from '@/store/settingsStore'
import { getEventColor } from '@/lib/eventColor'

export function useTaskColor(): (task: CalendarEvent) => string {
    const calendars = useCalendarStore((state) => state.calendars)
    const categories = useCalendarStore((state) => state.categories)
    const useCategoryColors = useSettingsStore((state) => state.useCategoryColors)
    const useCategoryColorsForTasks = useSettingsStore((state) => state.useCategoryColorsForTasks)

    return useCallback(
        (task: CalendarEvent) =>
        getEventColor(task, { categories, calendars, useCategoryColors, useCategoryColorsForTasks }),
        [categories, calendars, useCategoryColors, useCategoryColorsForTasks]
    )
}