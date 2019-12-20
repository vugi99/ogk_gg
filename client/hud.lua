local hud

-- HUD Wrapper
HUD = {
    started = false
}

-- Pseudo constructor for a pseudo object
function HUD.init() 
    hud = CreateWebUI(0.0, 0.0, 0.0, 0.0, 5, 10)
	LoadWebFile(hud, "http://asset/ogk_gg/gui/ui.html")
	SetWebAlignment(hud, 0.0, 0.0)
	SetWebAnchors(hud, 0.0, 0.0, 1.0, 1.0)
    SetWebVisibility(hud, WEB_VISIBLE)
    HUD.started = true
end

-- Wrapper function to change item visibility
function HUD.setVisibility(visibility)
    SetWebVisibility(hud, visibility)
end

function HUD.hide()
    SetWebVisibility(hud, WEB_HIDDEN)
end

function AddFrag(killer, weapon, victim)
	ExecuteWebJS(hud, "killfeed.registerKill('"..killer.."', '"..victim.."', '===>')")
end
AddRemoteEvent("AddFrag", AddFrag) 

function PlayerChangeLevel(newLevel)
	AddPlayerChat(newLevel)
	ExecuteWebJS(hud, "ChangePlayerLevel('"..newLevel.."')")
end
AddRemoteEvent("PlayerChangeLevel", PlayerChangeLevel)

AddRemoteEvent("WarnDesynchro", function()
	ExecuteWebJS(hud, "Warn('<span style=\"color:orange\">[LEVEL UP]</span>')")
end)

AddRemoteEvent("GameRestarting", function()
	ExecuteWebJS(hud, "Warn('<span style=\"color:orange\">[WARNING]</span> GAME STARTING')")
	SetWebVisibility(hud, WEB_VISIBLE)
end)

function SetUIData(weapon_name, weapon_next, current_map)
    if not HUD.started then
        return
    end 
	local ply_health = GetPlayerHealth()
	local weapon, ammo, inmag = GetPlayerWeapon()

	ExecuteWebJS(hud, "RefreshPlayerBar("..ply_health..","..inmag.. ",'" .. weapon_name .. "','" .. weapon_next .. "','" .. current_map .. "')")
end
AddRemoteEvent("SetUIData", SetUIData)